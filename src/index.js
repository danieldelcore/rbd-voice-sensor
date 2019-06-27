import React, { useEffect, useState } from 'react';

const commands = {
    lift: 'lift',
    moveUp: 'move up',
    moveDown: 'move down',
    drop: 'drop',
};

const parseCommand = transcript =>
    Object.keys(commands).reduce((accum, command) => {
        if (accum !== '') return accum;

        if (transcript.includes(commands[command])) {
            return commands[command];
        }

        return accum;
    }, '');

const parseCommandMeta = (command, transcript) => {
    switch (command) {
        case commands.lift:
            return { itemId: transcript.split(commands.lift)[1].trim() || '' };
            break;
        default:
            break;
    }
};

function voiceSensor(api) {
    let speech;

    const [command, setCommand] = useState({
        text: '',
        count: 0,
    });
    const [drag, setDrag] = useState(null);

    useEffect(() => {
        speech = new webkitSpeechRecognition() || speechRecognition();
        speech.continuous = true;
        speech.interimResults = false;
        speech.lang = 'en-US';

        speech.start();

        speech.onresult = event => {
            console.log('onresult');
            setCommand({
                text: event.results[event.results.length - 1][0].transcript,
                count: (command.count += 1),
            });
        };

        speech.onerror = event => {
            console.error(event.error);
        };

        speech.onend = () => {
            console.log('onend');

            /**
             * SpeechRecognition stops automatically after inactivity.
             * We want it to keep going until we tell it to stop
             */
            // speech.start();
        };

        return () => {
            console.log('DISMOUNT');

            speech.stop();
        };
    }, []);

    useEffect(() => {
        const transcript = command.text.toLowerCase();
        const currentCommand = parseCommand(transcript);
        const commandMeta = parseCommandMeta(currentCommand, transcript);

        switch (currentCommand) {
            case commands.lift:
                console.log('action', commands.lift, commandMeta);
                const preDrag = api.tryGetLock(commandMeta.itemId);
                if (!preDrag) return;
                setDrag(preDrag.snapLift());
                break;
            case commands.moveUp:
                console.log('action', commands.moveUp);
                if (!drag) return;
                drag.moveUp();
                break;
            case commands.moveDown:
                console.log('action', commands.moveDown);
                if (!drag) return;
                drag.moveDown();
                break;
            case commands.drop:
                console.log('action', commands.drop);
                if (!drag) return;
                drag.drop();
                setDrag(null);
                break;
            default:
                console.log('BREAK', currentCommand);
                break;
        }
    }, [command.text, command.count]);

    console.log(command);
}

export default voiceSensor;
