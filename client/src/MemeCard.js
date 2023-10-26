import React from "react";
import { useNavigate } from "react-router-dom";
function MemeCard({title, photoURL, content, font, fontColor, fontSize, leftPercent, topPercent}) {
    const nav = useNavigate();
  return (
    <div className="container-flex">
      <div className="row justify-content-center">
        <div
          className="imageContainer col-8 p-0"
        >
          <img id="meme-maker-cat" className="col-6" src={photoURL} alt={title} />
          <p 
            className="content m-auto"
            style={{
              position: "absolute",
              fontFamily: font,
              color: fontColor,
              fontSize: fontSize,
              top: `${topPercent}%`,
              left: `${leftPercent}%`,
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}



export default MemeCard;