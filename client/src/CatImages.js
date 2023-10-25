import React, { useEffect, useState } from "react";
import CatImageCard from './CatImageCard'
function CatImages() {
    //fetch cat images from /cats
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
        return <CatImageCard key={cat.id} name={cat.name} src={cat.photo_url} alt={cat.alt}/>
    });

    return(
        <div className="container-flex">
            {catImagesElement}
            
            
        </div>
    )
}

export default CatImages;