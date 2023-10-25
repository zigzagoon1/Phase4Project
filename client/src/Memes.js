import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
function Memes() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then((user) => {
            console.log(user)
            setMemes(user.memes)
        })
    }, [])

    const memeElements = memes.map((meme) => {
        return <MemeCard key={meme.id} title={meme.title} photoURL={meme.photo_url} content={meme.content} font={meme.font} fontColor={meme.font_color} fontSize = {meme.font_size}
            leftPercent={meme.left_percent} topPercent={meme.top_percent}
        />
    })
    return(
        <div className="text-center">
            <h1>My Memes</h1>
            <br></br>
            {memeElements}
        </div>
    )
}

export default Memes;