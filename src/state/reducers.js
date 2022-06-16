import { FETCH_MEMES } from "./actionTypes";

const intialState= [
    // {
    // id: '',
    // name: '',
    // url: '',
    // width: 0,
    // height: 0,
    // box_count: 0
    // }
    
]

const memeReducer = (state = intialState, action) => {
    switch(action.type){
        case FETCH_MEMES:
            return action.payload
        default:
            return state;
    }
}

export default memeReducer;