import { SAVE_RESUME } from "./ActionType";

export const saveResume=(resume)=>{
    return{
        type:SAVE_RESUME,
        payload:resume
    }
}