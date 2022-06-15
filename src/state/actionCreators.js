import { FETCH_MEMES } from "./actionTypes";
import axios from 'axios';


export function fetchMemes(){
    return function(dispatch){
        axios.get('https://api.imgflip.com/get_memes')
            .then(res => {
                debugger
                //dispatch({type: FETCH_MEMES, payload: res.data })
            })
            .catch(err =>{
                debugger
            })
    }
}