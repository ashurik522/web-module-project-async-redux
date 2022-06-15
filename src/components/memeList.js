import React from "react";
import Meme from "./meme";
import { connect } from "react-redux";

const MemeList = (props) => {

    return(
        <div>
            <button className='startBtn'>Get Started</button>
            Meme map here
            <Meme />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        memes: state
    }
}

export default connect(mapStateToProps,{})(MemeList);