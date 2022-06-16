import React, {useEffect} from "react";
import Meme from "./meme";
import { connect } from "react-redux";
import { fetchMemes } from "../state/actionCreators";

const MemeList = (props) => {

    useEffect(()=>{
        props.fetchMemes()
      },[]);
     
    
    return(
        <div>
            <div className='meme-container'>
                {props.memes?.map((elem)=>{
                    return <Meme key={elem.id} meme={elem}/>
                })}
            </div>
        </div>
    )
}
 
const mapStateToProps = state =>{
    return {
        memes: state.memes
    }
}



export default connect(mapStateToProps, {fetchMemes})(MemeList);