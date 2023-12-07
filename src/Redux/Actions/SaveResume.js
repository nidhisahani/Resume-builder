import { SAVE_RESUME } from "./ActionType";

// send final resume to the redux state 
export const saveResume=(resume)=>{
    return{
        type:SAVE_RESUME,
        payload:resume
    }
}