import React, { useEffect, useState } from "react";
import CatImageCard from './CatImageCard'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CatImages(makeMeme) {

    const nav = useNavigate();
    const [cats, setCats] = useState([])
    useEffect(() => {
        fetch('/cats')
        .then((r) => {
            if (r.ok) {
                r.json() 
                .then((cats) => {
                    console.log(cats)
                    setCats(cats)
                })
            }
        })

    }, [])

    function handleAddCat() {
        nav('/add-cat')        
    }

    const catImagesElement = cats.map((cat) => {
        return <CatImageCard key={cat.id} id={cat.id} name={cat.name} src={cat.photo_url} alt={cat.alt} makeMeme={makeMeme}/>
    });

    return(
        <div className="container-flex bg-light">
          <div className="row m-auto my-3 bg-light justify-content-center">
            <Button className="col-2" onClick={handleAddCat}>Add Cat</Button>
          </div>
            {catImagesElement}
            
            
        </div>
    )
}

export default CatImages;