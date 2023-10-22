import React, { useEffect, useState } from "react";

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
                })
            }
        })

    })

    return(
        <div>
            
        </div>
    )
}

export default CatImages;