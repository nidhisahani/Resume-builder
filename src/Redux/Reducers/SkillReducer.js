import { SET_SKILLS } from "../Actions/ActionType";
import initialState from './initialState.json'


export const skillReducer=(state=initialState.skills,action)=>{
    switch(action.type){
        case SET_SKILLS:
            return{
                ...state,
                state:[...state, action.payload]
            }
        default:
            return state
    }
}