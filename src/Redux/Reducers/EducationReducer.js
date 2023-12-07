import { SET_EDUCATION } from "../Actions/ActionType";
import initialState from './initialState.json';

//update the state of education reducer and responds with the new state.
export const educationReducer=(state=initialState.education,action)=>{
    switch(action.type){
        case SET_EDUCATION:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
        
    }
}