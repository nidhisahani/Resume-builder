import { SET_PERSONAL_INFO } from "./ActionType";


export const setPersonalInfo=(info)=>{
    return{
        type:SET_PERSONAL_INFO,
        payload:info
    }
}