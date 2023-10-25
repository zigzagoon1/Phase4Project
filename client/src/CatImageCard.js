import React from "react";
import {Button, Card} from 'react-bootstrap';
import MakeAMeme from "./MakeAMeme";
import { useNavigate } from "react-router-dom";
function CatImageCard({ name, src, alt, makeMeme }) {
    const nav = useNavigate();
    name = name.replace(/\s/g, '');
  function handleClick() {
    nav(`make-meme/${name}`, {state: {name, src}});
  }
  return (
    <div className="row g-0">
      <Card className="bg-light">
        <div className="card-body d-flex flex-column align-items-start"></div>
        <div className="fs-4 mx-4">
          <div className="">
            {name} <br></br>
          </div>
          <img className="mb-3 col-6 col-sm-3 " src={src} alt={alt} />
          <br></br>
          <div className="">
            <Button
              className="mt-auto ms-auto col-md-4 bg-danger mx-2"
              onClick={handleClick}
            >
              Make A Meme
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CatImageCard;