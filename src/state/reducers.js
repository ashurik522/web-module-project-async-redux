import { FETCH_MEMES } from "./actionTypes";

const intialState= []

const memeReducer = (state = intialState, action) => {
    switch(action.type){
        case FETCH_MEMES:
            return state;
        default:
            return state;
    }
}

export default memeReducer;