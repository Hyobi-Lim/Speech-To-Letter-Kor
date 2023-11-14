import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Main.css";

export const content = [];

const MainPage = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });
    const navigate = useNavigate();

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'ko' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // 글자 수 제한
    const limitedTranscript = transcript.substring(0, 340);

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const goToEditPage = () => {
        content.push(limitedTranscript);
        navigate("/EditPage");
    };

    return (
        <>
            <div className="container">
                <h2>Speech to Text</h2>
                <br />
                <p style={{marginTop:"24px", marginBottom:"100px"}}>Say what you want to tell to the receiver (Body of the letter).</p>

                <div className="main-content" onClick={() => setTextToCopy(limitedTranscript)}>
                    {limitedTranscript}
                </div>

                <div className="btn-style">
                    <button onClick={setCopied} className='btn-button'>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening} className='btn-button'>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening} className='btn-button'>Stop Listening</button>
                    <button onClick={goToEditPage} className='btn-button'>Edit Content</button>
                </div>
            </div>
        </>
    );
};

export default MainPage;