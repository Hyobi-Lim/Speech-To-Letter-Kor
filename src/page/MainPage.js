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
                <p style={{marginTop:"24px", marginBottom:"100px"}}>시작 버튼을 누르고 상대방에게 전하고 싶은 말을 말해보세요!</p>

                <div className="main-content" onClick={() => setTextToCopy(limitedTranscript)}>
                    {limitedTranscript}
                </div>

                <div className="btn-style">
                    <button onClick={setCopied} className='btn-button'>
                        {isCopied ? '복사완료' : '복사하기'}
                    </button>
                    <button onClick={startListening} className='btn-button'>시작</button>
                    <button onClick={SpeechRecognition.stopListening} className='btn-button'>멈추기</button>
                    <button onClick={goToEditPage} className='btn-button'>편지 만들기</button>
                </div>
            </div>
        </>
    );
};

export default MainPage;