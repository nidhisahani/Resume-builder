import { SET_PERSONAL_INFO } from "../Actions/ActionType";
import initialState from './initialState.json'



export const personalInfoReducer=(state=initialState.personalInfo,action)=>{
    switch(action.type){
        case SET_PERSONAL_INFO:
            return{
                ...state,
                state:[...state,action.payload]
            }
        default:
            return state
    }
}