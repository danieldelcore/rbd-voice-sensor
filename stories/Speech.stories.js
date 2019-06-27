import { storiesOf } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { useStyleCollector, styleCollector } from 'trousers';
import { Transcript } from '../fixtures';

const TranscriptView = () => {
    const [state, setState] = useState({
        interimTranscript: '',
        finalTranscript: '',
    });

    useEffect(() => {
        function reset() {
            speech.start();
        }

        const speech = new webkitSpeechRecognition() || speechRecognition();
        speech.continuous = true;
        speech.interimResults = true;
        speech.lang = 'en-US';

        speech.start();

        speech.onresult = event => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            console.log('finalTranscript', finalTranscript);
            console.log('interimTranscript', interimTranscript);

            setState({
                finalTranscript,
                interimTranscript,
            });
        };

        speech.onerror = event => {
            console.error(event.error);
        };

        speech.onend = () => {
            reset();
        };
    }, []);

    return (
        <div>
            <h1>Transcript</h1>
            <Transcript interim>{state.interimTranscript}</Transcript>
            <Transcript>{state.finalTranscript}</Transcript>
        </div>
    );
};

storiesOf('Speech', module).add('Basic detection', () => <TranscriptView />);
