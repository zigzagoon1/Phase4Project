import React, { useContext, useState } from "react";
import {Button, Card, OverlayTrigger} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./context/current_user";
import { Tooltip } from "react-bootstrap";
function CatImageCard({ id, name, src, alt, makeMeme }) {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const [showHover, setShowHover] = useState(false);
    const nav = useNavigate();


  function handleClick() {
    nav(`make-meme/${name}`, {state: {id, name, src}});
  }

  function handleHover() {
    setShowHover(true);
  }
  


  const tooltip = React.forwardRef(({test, ...props}, ref) => {
    <Tooltip {...props}>
      You must be logged in to create a meme.
    </Tooltip>
  }
  )

  let button = <Button className="mt-auto ms-auto col-md-4 bg-danger mx-2"onClick={handleClick} onMouseEnter={handleHover}>Make A Meme</Button>

  if (!currentUser) {
    button = <Button type="button" className="mt-auto ms-auto col-md-4 bg-danger mx-2" disabled={true} data-toggle="tooltip" data-placement="top" title="You must be logged in to create a meme" onClick={handleClick}>Make A Meme</Button>
  }

  console.log(button)


  return (
    <div className="row g-0">
      {!currentUser ? 'You must be logged in to make a meme' : null}
      <Card className="bg-light">
        <div className="card-body d-flex flex-column align-items-start"></div>
        <div className="fs-4 mx-4">
          <div className="">
            {name} <br></br>
          </div>
          <img className="mb-3 col-6 col-sm-3 " src={src} alt={alt} />
          <br></br>
          <div className="">
            {button}

          </div>
        </div>
      </Card>
    </div>
  );
}

export default CatImageCard;