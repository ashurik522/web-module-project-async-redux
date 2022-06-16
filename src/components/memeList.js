import React, {useEffect} from "react";
import Meme from "./meme";
import { connect } from "react-redux";
import { fetchMemes } from "../state/actionCreators";

const MemeList = (props) => {

    useEffect(()=>{
        props.fetchMemes()
      },[]);
    
    console.log(props.memes)
   
    
    return(
        <div>
            <button className='startBtn'>Get Started</button>
            <div className='meme-container'>
                {/* {props.memes.map((elem)=>{
                    return <Meme key={elem.id} meme={elem}/>
                })} */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    
    return{
        // id: state.id,
        // name: state.name,
        // url: state.url,
        // width: state.width,
        // height: state.height,
        // box_count: state.box_count
        memes: state.memes
    }
}

export default connect(mapStateToProps,{fetchMemes})(MemeList);