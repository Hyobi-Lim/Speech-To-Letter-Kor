import { useState } from "react";
import { useNavigate } from "react-router";
import { content } from "./MainPage";
import LetterPaper1 from './LetterPaper1.jpg';
import LetterPaper2 from './LetterPaper2.jpg';
import LetterPaper3 from './LetterPaper3.jpg';
import LetterPaper4 from './LetterPaper4.jpg';
import LetterPaper5 from './LetterPaper5.jpg';
import LetterPaper6 from './LetterPaper6.jpg';
import html2canvas from 'html2canvas';
import "./Edit.css"

function EditPage() {
  const navigate = useNavigate();

  const [from, setFrom] = useState('');
  const onChangeFrom = (e) => {
    setFrom(e.target.value);
    console.log(from);
  };

  const [story, setStory] = useState(content[content.length-1]);
  const onChangeStory = (e) => {
    setStory(e.target.value);
    console.log(story);
  };

  const [to, setTo] = useState('');
  const onChangeTo = (e) => {
    setTo(e.target.value);
    console.log(to);
  };

  const onCapture = () => {
		console.log('onCapture');
		html2canvas(document.getElementById('div')).then(canvas=>{
			onSaveAs(canvas.toDataURL('image/png'), 'speech-to-letter.png')
		});
	};
	
	const onSaveAs =(url, filename)=> {
		console.log('onSaveAs');
		var link = document.createElement('a');
		document.body.appendChild(link);
		link.href = url;
		link.download = filename;
		link.click();
		document.body.removeChild(link);
	};

  const gomainpage = () => {
    navigate("/");
  };

  const changeImg = (newImage) => {
    document.getElementById("img").src = newImage;
  };

  const [isBold, setIsBold] = useState(false);
  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const [isItalic, setIsItalic] = useState(false);
  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const [isUnderline, setIsUnderline] = useState(false);
  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const [color, setColor] = useState("black");
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const [fontFamily, setFontFamily] = useState("Sans-Serif");
  const onChangeFontFamily = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <div className="container">
      <h2>Edit Your Letter</h2>
      <br/>
      <p style={{marginTop:"24px" }}>여러분만의 편지를 만들어보세요!</p>
      <br/>

      <div className="edit-container"> 
        <div>
          <p style={{margin: "24px 0px"}}>받는 사람</p>
          <input type="text" className="edit-tofrom" onChange={onChangeFrom} value={from} maxlength="20"/>

          <p style={{margin: "24px 0px"}}>편지 내용</p>
          <textarea type="text" className="edit-content" onChange={onChangeStory} defaultValue={content[content.length-1]} maxlength="340"/>
          
          <p style={{margin: "24px 0px"}}>보내는 사람</p>
          <input type="text" className="edit-tofrom" onChange={onChangeTo} value={to} maxlength="20"/>

          <div className="btn-style">
            <button
              className="edit-button"
              onClick={toggleBold}
              style={{ opacity: isBold ? 1 : 0.5 }}
            >
              두껍게
            </button>
            <button
              className="edit-button"
              onClick={toggleItalic}
              style={{ opacity: isItalic ? 1 : 0.5 }}
            >
              기울임
            </button>
            <button
              className="edit-button"
              onClick={toggleUnderline}
              style={{ opacity: isUnderline ? 1 : 0.5 }}
            >
              밑줄
            </button>
          </div>

          <div className="btn-style" style={{marginTop: "24px"}}>
            <select name="color" onChange={onChangeColor} value={color} className="select">
              <option value="black" selected>Black</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="navy">Navy</option>
              <option value="purple">Purple</option>
              <option value="silver">Silver</option>
              <option value="gray">Gray</option>
              <option value="white">White</option>
            </select>

            <select name="font" onChange={onChangeFontFamily} value={fontFamily} className="select">
              <option value="sans-serif" selected>Sans-Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
              <option value="fantasy">Fantasy</option>
            </select>
          </div>
        </div>

        <div style={{marginLeft: "30px"}}>
          <div className="main-image" id="div" 
          style={{ fontWeight: isBold ? "bold" : "normal", 
          fontStyle: isItalic ? "italic" : "normal" }}>

            <img src={LetterPaper1} id="img" alt="편지지1" style={{width: "800px"}}/>

            <p style={{ whiteSpace:"pre-wrap", textDecoration: isUnderline ? "underline" : "none", color: color, fontFamily: fontFamily, position: 'absolute', top: '10%', left: '100px' }}>{from}</p>
            <p className="main-image-story" style={{ whiteSpace:"pre-wrap", textDecoration: isUnderline ? "underline" : "none", color: color, fontFamily: fontFamily }}>{story}</p>
            <p style={{ whiteSpace:"pre-wrap", textDecoration: isUnderline ? "underline" : "none", color: color, fontFamily: fontFamily, position: 'absolute', bottom: 60, right: 100 }}>{to}</p>
          </div>

          <div className="btn-style">
            <button type="button" className="select-button" onClick={() => changeImg(LetterPaper1)}><img src={LetterPaper1} alt="편지지1" className="select-image"/></button>
            <button type="button" className="select-button" onClick={() => changeImg(LetterPaper2)}><img src={LetterPaper2} alt="편지지2" className="select-image"/></button>
            <button type="button" className="select-button" onClick={() => changeImg(LetterPaper3)}><img src={LetterPaper3} alt="편지지3" className="select-image"/></button>
            <button type="button" className="select-button" onClick={() => changeImg(LetterPaper4)}><img src={LetterPaper4} alt="편지지4" className="select-image"/></button>
            <button type="button" className="select-button" onClick={() => changeImg(LetterPaper5)}><img src={LetterPaper5} alt="편지지5" className="select-image"/></button>
            <button type="button" className="select-button" onClick={() => changeImg(LetterPaper6)}><img src={LetterPaper6} alt="편지지6" className="select-image"/></button>
          </div>
        </div>
      </div>
      <div className="btn-style">
        <button className="edit-button" onClick={gomainpage} style={{marginRight:"50px"}}>이전 페이지</button>
        <button className="edit-button" onClick={onCapture}>편지 다운로드</button>
      </div>
    </div>
  );
}
  
export default EditPage;