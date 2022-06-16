import React from "react";
import Meme from "./meme";
import { connect } from "react-redux";

const MemeList = (props) => {
    
    const { memes } = props
    console.log(memes)
    
    return(
        <div>
            <button className='startBtn'>Get Started</button>
            <div className='meme-container'>
                {/* {memes.map((elem)=>{
                    return <Meme key={elem.id} meme={elem}/>
                })} */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    
    return{
        memes: state.memes
    }
}

export default connect(mapStateToProps,{})(MemeList);