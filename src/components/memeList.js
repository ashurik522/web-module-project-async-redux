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
            <div >
                {props.memes.map((elem)=>{
                    return <Meme key={elem.id} meme={elem}/>
                })}
            </div>
        </div>
    )
}
 
const mapStateToProps = state =>{
    console.log(state)
    return {
        memes: state
    }
}



export default connect(mapStateToProps, {fetchMemes})(MemeList);