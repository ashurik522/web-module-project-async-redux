import React from "react";

const Meme = (props) => {
    
    const {meme} = props;

    return(
        <div>
            <img src={meme.url}/>
            {meme.name}
        </div>
    )
}


export default Meme;