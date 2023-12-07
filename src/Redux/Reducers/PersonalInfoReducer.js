import { SET_PERSONAL_INFO } from "../Actions/ActionType";
import initialState from './initialState.json'

//update the state of personalInfo reducer and responds with the new state.
export const personalInfoReducer=(state=initialState.personalInfo,action)=>{
    switch(action.type){
        case SET_PERSONAL_INFO:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}