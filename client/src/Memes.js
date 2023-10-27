import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
function Memes() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then((user) => {
            setMemes(user.memes)
        })
    }, [])

    const memeElements = memes.map((meme) => {
        return <MemeCard key={meme.id} id={meme.id} catId={meme.cat_id} userId={meme.user_id} title={meme.title} photoURL={meme.photo_url} content={meme.content} font={meme.font} fontColor={meme.font_color} fontSize = {meme.font_size}
            textLeft={meme.text_left} textTop={meme.text_top}
        />
    })
    return(
        <div className="">
            <h1 className="text-center">My Memes</h1>
            <br></br>
            {memeElements}
        </div>
    )
}

export default Memes;