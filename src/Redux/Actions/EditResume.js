import { EDIT_RESUME } from "./ActionType" 

export const editResume=(id)=>{
    return{
        type:EDIT_RESUME,
        payload:id
    }
}