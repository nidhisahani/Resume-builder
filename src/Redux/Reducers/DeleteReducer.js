import { DELETE_RESUME } from "../Actions/ActionType";
import initialState from './initialState.json';

export const deleteReducer=(state=initialState,action)=>{
    switch(action.type){
        case DELETE_RESUME:
            {
                const newResume=state.resume.filter(
               (resume,id)=>id !== action.payload
                )
                return {...state,resume:newResume}
            }
    }
}