import { SET_EXPERIENCE } from "../Actions/ActionType";
import initialState from './initialState.json';

//update the state of experience reducer and responds with the new state.
export const experianceReducer=(state=initialState.experience,action)=>{
    switch(action.type){
        case SET_EXPERIENCE:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}