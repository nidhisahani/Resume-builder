import { SET_SKILLS } from "../Actions/ActionType";
import initialState from './initialState.json'

//update the state of skills reducer and responds with the new state.
export const skillReducer=(state=initialState.skills,action)=>{
    switch(action.type){
        case SET_SKILLS:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}