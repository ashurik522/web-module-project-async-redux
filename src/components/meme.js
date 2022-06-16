import React from "react";

const Meme = (props) => {
    
    const {meme} = props;

    return(
        <div>
            {meme.name}
        </div>
    )
}


export default Meme;