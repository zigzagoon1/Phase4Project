import React, { useContext, useEffect, useState } from "react";
import CatImageCard from './CatImageCard'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./context/current_user";
function CatImages(makeMeme) {

    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const nav = useNavigate();
    const [cats, setCats] = useState([])
    useEffect(() => {
        fetch('/cats')
        .then((r) => {
            if (r.ok) {
                r.json() 
                .then((cats) => {
                    setCats(cats)
                })
            }
        })

    }, [])

    function handleAddCat() {
        nav('/add-cat')        
    }

    let button = <Button className="col-2" onClick={handleAddCat}>Add Cat</Button>;
    if (!currentUser) {
        button = <Button className="col-2" disabled={true} onClick={handleAddCat}>Add Cat</Button>
    }

    const catImagesElement = cats.map((cat) => {
        return <CatImageCard key={cat.id} id={cat.id} name={cat.name} src={cat.photo_url} alt={cat.alt} makeMeme={makeMeme}/>
    });

    return(
        <div className="container-flex bg-light">
          <div className="row m-auto my-3 bg-light justify-content-center">
            {button}
          </div>
            {catImagesElement}
            
            
        </div>
    )
}

export default CatImages;