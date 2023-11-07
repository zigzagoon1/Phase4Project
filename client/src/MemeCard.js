import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function MemeCard({id, catId, userId, title, photoURL, content, font, fontColor, fontSize, textLeft, textTop}) {
    const nav = useNavigate();
  const [cardVisible, setCardVisible] = useState(true);

    function handleEdit() {
      nav(`/memes/edit/${id}`, {state: {id, catId, userId, title, photoURL, content, font, fontColor, fontSize, textLeft, textTop}})
    }

    function handleDelete() {
      fetch(`/memes/${id}`, {
        method: "DELETE",
      })
      .then(r => {
        if (r.status !== 204) return r.json();
        else setCardVisible(false);
      })
      .then((deletedMeme) => {
        setCardVisible(false)
      })
    }

  return ( cardVisible ? 
    <div className="container-flex my-5">
      <div className="row justify-content-center">
        <div
          className="imageContainer col-8  border border-dark p-0"
        >
          <img id="meme-maker-cat" className="col-12" src={photoURL} alt={title} />
          <p 
            className="content m-auto"
            style={{
              position: "absolute",
              fontFamily: font,
              color: fontColor,
              fontSize: fontSize,
              top: `${textTop}%`,
              left: `${textLeft}%`,
            }}
          >
            {content}
          </p>
        </div>
        <div className="col-12 text-center">
        <Button className="col-3 mx-3" onClick={handleEdit}>Edit Meme</Button>
        <Button className="col-3" onClick={handleDelete}>Delete Meme</Button>
        </div>
      </div>
    </div>
    :
    <div className="hidden"></div>
  );
}



export default MemeCard;