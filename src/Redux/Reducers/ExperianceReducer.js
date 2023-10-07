import { SET_EXPERIENCE } from "../Actions/ActionType";
import initialState from './initialState.json';

export const experianceReducer=(state=initialState.experience,action)=>{
    switch(action.type){
        case SET_EXPERIENCE:
            return{
                ...state,
                state:[...state,action.payload]
            }
        default:
            return state
    }
}