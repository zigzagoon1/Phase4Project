import React, { useState } from "react";
import { Placeholder } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
function MakeAMeme() {
  const location = useLocation();
  const { name, src } = location.state;


  const [selectedFont, setSelectedFont] = useState('Arial');
  const [content, setContent] = useState('Your Text Here');
  const [color, setColor] = useState('#000000')
  const [fontSize, setFontSize] = useState(24)


  function handleFontChange(e) {
    setSelectedFont(e.target.value);
  }
 
  function handleContentChange(e) {

    setContent(e.target.value)
  }

  function handleColorChange(e) {
    setColor(e.target.value)
  }

  function handleFontSizeChange(e) {
    setFontSize(parseInt(e.target.value))
  }



  return (
    <div className="container-flex bg-light">
      <div className="row justify-content-center">
        <h1 className="text-center">Make A Meme!</h1>
        <img id="meme-maker-cat" className="col-6" src={src} alt={name} />
        <text id="overlay-text" style={{fontFamily: selectedFont, color: color, fontSize: fontSize }} placeholder=''>{content}</text>
        <textarea onChange={handleContentChange} placeholder="Type meme content here..."></textarea>
      </div>
      <form className="text-center">
      <br></br>
        <label className="col-2" htmlFor="font">Select Your Font:</label>
        <select onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        <br></br>
        <label className="my-5">Color</label>
        <select onChange={handleColorChange}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="white">White</option>
            <option value="pink">Pink</option>
        </select>
        <br></br>
        <label className="my-3" onChange={handleFontSizeChange}>Font Size</label>
        <select onChange={handleFontSizeChange}>
            <option value='30'>30</option>
            <option value='24'>24</option>
            <option value='22'>22</option>
            <option value='20'>20</option>
        </select>
      </form>
    </div>
  );
}


export default MakeAMeme;