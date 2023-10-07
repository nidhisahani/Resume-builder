import {SAVE_RESUME} from '../Actions/SaveResume';
import initialState from './initialState.json'


export const resumeReducer=(state=initialState,action)=>{
    switch(action.type){
        case SAVE_RESUME:
            return{
                ...state,
                state:[...state,action.payload]
            }
        default:
            return state
    }
}