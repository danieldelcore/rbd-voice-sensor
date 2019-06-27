import React, { useState, useEffect } from 'react';
import { useStyles, css, styleCollector } from 'trousers';

const stylesFinal = css`
    font-size: 25px;
`;

const stylesInterim = css`
    font-size: 25px;
    color: darkgrey;
`;

const stylesWrapper = styleCollector('transcriptwrapper').element`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 8px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`;

const Transcript = props => {
    const wrapperClasses = useStyles(stylesWrapper);
    const finalClasses = useStyles(stylesFinal);
    const interimClasses = useStyles(stylesInterim);

    const [state, setState] = useState({
        interimTranscript: '',
        finalTranscript: '',
    });

    useEffect(() => {
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

            setState({
                finalTranscript,
                interimTranscript,
            });
        };

        speech.onerror = event => {
            console.error(event.error);
        };

        speech.onend = () => {
            console.log('onend');

            // speech.start();
        };

        return () => speech.stop();
    }, []);

    return (
        <div className={wrapperClasses}>
            {state.interimTranscript ? (
                <p className={interimClasses}>{state.interimTranscript} 👂</p>
            ) : null}
            {state.finalTranscript ? (
                <p className={finalClasses}>{state.finalTranscript} ✅</p>
            ) : null}

            {!state.interimTranscript && !state.finalTranscript ? (
                <p className={finalClasses}>Say something 🤐</p>
            ) : null}
        </div>
    );
};

export default Transcript;
