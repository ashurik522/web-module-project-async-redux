import React from "react";

const Meme = (props) => {
    
    const {meme} = props;

    return(
        <div className='meme-container'>
            <div className="imgContainer">
                <img alt= 'meme image' src={meme.url}  />
            </div>
            <h2 className="name">{meme.name}</h2>
        </div>
    )
}


export default Meme;