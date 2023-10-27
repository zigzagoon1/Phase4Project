import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Draggable from "react-draggable";
import { Button } from "react-bootstrap";
import { CurrentUserContext } from "./context/current_user";
function MakeAMeme() {
  const location = useLocation();
  const path = location.pathname;
  const params = location.state;

  const initialMemeState = path.includes('/edit') ? 
  {
    title: params.title,
    photoURL: params.photoURL,
    content: params.content,
    selectedFont: params.font,
    fontSize: params.fontSize,
    fontColor: params.fontColor,
    leftPercent: params.leftPercent,
    topPercent: params.topPercent
  }
  :
  {
    title: '',
    photoURL: location.state.src,
    content: 'Your Text Here',
    selectedFont: 'Arial',
    fontSize: 24,
    fontColor: 'black',
    leftPercent: '50%',
    topPercent: '50%'
  }

  // const [src, setSrc] = useState('');
  // const [id, setId] = useState('');
  // if (path.includes('/make-meme')) {
  //   setId(location.state.id);
  //   setSrc(location.state.src);
  //   console.log()
  // }


  const [meme, setMeme] = useState(initialMemeState);

  const imageRef = useRef(null);
  const [imageRect, setImageRect] = useState(null);
  const textRef = useRef(null);
  const [textRect, setTextRect] = useState(null);

  useEffect(() => {
    if (imageRef.current !== null && textRef.current !== null) {
      setImageRect(imageRef.current.getBoundingClientRect());
      setTextRect(textRef.current.getBoundingClientRect());
    }

  }, [imageRef, textRef])



  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

 

  function handleValueChange(e) {
    const {name, value} = e.target;
    setMeme(prevMeme => ({...prevMeme, [name]: value,
    }))
  }

  function handleDragStop(data) {

    let leftPercentageX;
    let topPercentageY;

    // setTextRect(textRef.current.getBoundingClientRect())
    // setImageRect(imageRef.current.getBoundingClientRect())

    if (imageRect && textRect) {
        leftPercentageX = ((textRect.left - imageRect.left + data.x) / imageRect.width)* 100;
        topPercentageY = ((textRect.top - imageRect.top + data.y) / imageRect.height) * 100;
        setMeme({...meme, leftPercent: leftPercentageX, topPercent: topPercentageY});
    }

    else {
        return;
    }
    // console.log("width= ", '400');
    // console.log("height= ", '400');
    console.log("left= ", leftPercentageX);
    console.log("top= ", topPercentageY);
    console.log("datax= ", data.x);
    console.log("datay= ", data.y);
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (path.includes('/edit')) {
      const updatedMeme = {
        title: meme.title,
        content: meme.content,
        font: meme.selectedFont,
        font_color: meme.fontColor,
        font_size: meme.fontSize,
        left_percent: meme.leftPercent,
        top_percent: meme.topPercent
      }

      console.log(params)

    }
    else {
      const newMeme = {
        user_id: currentUser.id,
        cat_id: params.id,
        title: meme.title,
        content: meme.content,
        font: meme.selectedFont,
        font_color: meme.fontColor,
        font_size: meme.fontSize,
        left_percent: meme.leftPercent,
        top_percent: meme.topPercent,
        photo_url: meme.photoURL,
      };
      console.log(newMeme);
      fetch("/memes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMeme),
      })
        .then((r) => r.json())
        .then((memeR) => {
          console.log(memeR);
        });
    }

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
            src={meme.photoURL}
            alt={meme.title}
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
                fontFamily: meme.selectedFont,
                color: meme.fontColor,
                fontSize: `${meme.fontSize}px`,
                top: meme.topPercent,
                left: meme.leftPercent
              }}
              placeholder=""
            >
              {meme.content}
            </p>
          </Draggable>
        </div>
        <div className="text-center">
        <textarea
          name="content"
          className="col-6"
          onChange={handleValueChange}
          placeholder="Type meme content here..."
        ></textarea>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="text-center">
        <br></br>
        <label className="" htmlFor="title">
          Choose A Title
        </label>
        <input type="text" name="title" onChange={handleValueChange} value={meme.title}></input>
        <br></br>
        <label className="my-3 col-2" htmlFor="font">
          Select Your Font:
        </label>
        <select onChange={handleValueChange} name="selectedFont">
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        <br></br>
        <label className=" col-1 my-5">Color:</label>
        <select className="col-2" onChange={handleValueChange} name="fontColor">
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
        <label className="col-2" onChange={handleValueChange}>
          Font Size:
        </label>
        <select
          className="col-1"
          defaultValue={24}
          onChange={handleValueChange}
          name="fontSize"
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
