import {SET_TEMPLATE} from '../Actions/SetTemplate';
import initialState from './initialState.json'


export const setTemplateReducer=(state=initialState.template,action)=>{
    switch(action.type){
        case SET_TEMPLATE:
            return{
                ...state,
                state:[...state,action.payload]
            }
        default:
            return state
    }
}