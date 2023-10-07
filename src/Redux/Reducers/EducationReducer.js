import { SET_EDUCATION } from "../Actions/ActionType";
import initialState from './initialState.json';


export const educationReducer=(state=initialState.education,action)=>{
    switch(action.type){
        case SET_EDUCATION:
            return{
                ...state,
                state:[...state,action.payload]
            }
        default:
            return state
        
    }
}