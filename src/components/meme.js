import React from "react";
import { connect } from "react-redux";

const Meme = (props) => {

    return(
        <div>
            Image here
            <img />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        memes: state
    }
}

export default connect(mapStateToProps,{})(Meme);