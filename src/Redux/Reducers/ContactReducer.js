import { SET_CONTACT } from "../Actions/ActionType"; 
import initialState from './initialState.json';

//update the state of contact reducer and responds with the new state.
export const contactReducer=(state=initialState.contact,action)=>{
    switch(action.type){
        case SET_CONTACT:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}