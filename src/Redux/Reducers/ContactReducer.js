import { SET_CONTACT } from "../Actions/ActionType"; 
import initialState from './initialState.json';



export const contactReducer=(state=initialState.contact,action)=>{
    switch(action.type){
        case SET_CONTACT:
            return{
                ...state,
                state:[...state,action.payload]
            }
        default:
            return state
    }
}