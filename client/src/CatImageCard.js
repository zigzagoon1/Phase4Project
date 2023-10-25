import React from "react";
import {Card} from 'react-bootstrap';
function CatImageCard({name, src, alt, makeMeme}) {
    function handleClick() {
        makeMeme(name, src)
    }
    return(
        <div className="row g-0">
            <Card className='bg-light'>
            <div className="card-body d-flex flex-column align-items-start">
            </div>
              <div className="fs-4 mx-4">
                <div className="">
                {name} <br></br>
              </div>
              <img className="mb-3 col-6 col-sm-3 " src={src} alt={alt} />
                <br></br>
              <div className="">
                    <button className="mt-auto ms-auto col-md-4 bg-danger mx-2" onClick={handleClick}>Make A Meme</button>
                </div>
            </div>
            </Card>
        </div>
        
    )

}

export default CatImageCard;