import { FETCH_MEMES } from "./actionTypes";
import axios from 'axios';


export function fetchMemes(){
    return function(dispatch){
        axios.get('https://api.imgflip.com/get_memes')
            .then(res => {
                
                dispatch({type: FETCH_MEMES, payload: res.data.data.memes })
            })
            .catch(err =>{
                console.error(err)
            })
    }
}