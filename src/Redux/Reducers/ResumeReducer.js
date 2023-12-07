import { SAVE_RESUME } from '../Actions/ActionType' 
import initialState from './initialState.json'

//update the state of resume reducer and responds with the new state.

export const resumeReducer=(state=initialState,action)=>{
    switch(action.type){
        case SAVE_RESUME:
            return{
                ...state,
                resume:[...state.resume,action.payload]
            }
        default:
            return state
    }
}