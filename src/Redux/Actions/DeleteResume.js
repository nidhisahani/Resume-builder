import { DELETE_RESUME } from "./ActionType";

export const editResume=(id)=>{
    return{
        type:DELETE_RESUME,
        payload:id
    }
}