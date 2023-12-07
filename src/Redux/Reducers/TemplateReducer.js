import { SET_TEMPLATE } from '../Actions/ActionType' 
import initialState from './initialState.json'

//update the state of template reducer and responds with the new state.
export const setTemplateReducer=(state=initialState.template,action)=>{
    switch(action.type){
        case SET_TEMPLATE:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}