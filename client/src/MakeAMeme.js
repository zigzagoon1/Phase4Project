import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Draggable from "react-draggable";
import { Button } from "react-bootstrap";
import { CurrentUserContext } from "./context/current_user";
function MakeAMeme() {
  const location = useLocation();

  const { id, name, src } = location.state;

  const imageRef = useRef(null);
  const [imageRect, setImageRect] = useState(null);
  const textRef = useRef(null);
  const [textRect, setTextRect] = useState(null);

  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [content, setContent] = useState("Your Text Here");
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(24);
  const [title, setTitle] = useState("");

  const [leftPercentage, setLeftPercentage] = useState("50%");
  const [topPercentage, setTopPercentage] = useState("50%");
  function handleFontChange(e) {
    setSelectedFont(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleFontSizeChange(e) {
    setFontSize(parseInt(e.target.value));
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDragStop(data) {
    console.log(data);

    setImageRect(imageRef.current.getBoundingClientRect());
    setTextRect(textRef.current.getBoundingClientRect());

    let leftPercentageX;
    let topPercentageY;

    if (imageRect && textRect) {
        leftPercentageX = ((textRect.left - imageRect.left) / imageRect.width)* 100;
        topPercentageY = ((textRect.top - imageRect.top) / imageRect.height) * 100;
        setLeftPercentage(leftPercentageX);
        setTopPercentage(topPercentageY);
    }

    else {
        return;
    }



    console.log("width= ", '400');
    console.log("height= ", '400');
    console.log("left= ", leftPercentageX);
    console.log("top= ", topPercentageY);
    console.log("datax= ", data.x);
    console.log("datay= ", data.y);


  }
  function handleSubmit(e) {
    e.preventDefault();

    const meme = {
      user_id: currentUser.id,
      cat_id: id,
      title: title,
      content: content,
      font: selectedFont,
      font_color: color,
      font_size: fontSize,
      left_percent: leftPercentage,
      top_percent: topPercentage,
      photo_url: src,
    };
    console.log(meme);
    fetch("/memes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meme),
    })
      .then((r) => r.json())
      .then((newMeme) => {
        console.log(newMeme);
      });
  }

  return (
    <div className="container-flex bg-light">
      <div className="row justify-content-center">
        <h1 className="text-center">Make A Meme!</h1>
        <div className="imageContainer col-8 p-0">
          <img
            ref={imageRef}
            id="meme-maker-cat"
            className="col-6"
            src={src}
            alt={name}
          />
          <br></br>
          <Draggable
            onStop={(e, data) => handleDragStop(data)}
            className=""
            bounds=".imageContainer"
          >
            <p
              ref={textRef}
              id="overlay-text "
              className="make-a-meme m-0"
              style={{
                fontFamily: selectedFont,
                color: color,
                fontSize: fontSize,
              }}
              placeholder=""
            >
              {content}
            </p>
          </Draggable>
        </div>
        <div className="text-center">
        <textarea
          className="col-6"
          onChange={handleContentChange}
          placeholder="Type meme content here..."
        ></textarea>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="text-center">
        <br></br>
        <label className="" htmlFor="title">
          Choose A Title
        </label>
        <input type="text" onChange={handleTitleChange}></input>
        <br></br>
        <label className="my-3 col-2" htmlFor="font">
          Select Your Font:
        </label>
        <select onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        <br></br>
        <label className=" col-1 my-5">Color:</label>
        <select className="col-2" onChange={handleColorChange}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <br></br>
        <label className="col-2" onChange={handleFontSizeChange}>
          Font Size:
        </label>
        <select
          className="col-1"
          defaultValue={24}
          onChange={handleFontSizeChange}
        >
          <option value="38">38</option>
          <option value="30">30</option>
          <option value="24">24</option>
          <option value="22">22</option>
          <option value="20">20</option>
        </select>
        <br></br>
        <br></br>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}

export default MakeAMeme;
