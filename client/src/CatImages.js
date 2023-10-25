import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatImageCard from './CatImageCard'
function CatImages(makeMeme) {
    //fetch cat images from /cats
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


    const catImagesElement = cats.map((cat) => {
        return <CatImageCard key={cat.id} id={cat.id} name={cat.name} src={cat.photo_url} alt={cat.alt} makeMeme={makeMeme}/>
    });

    return(
        <div className="container-flex">
            {catImagesElement}
            
            
        </div>
    )
}

export default CatImages;