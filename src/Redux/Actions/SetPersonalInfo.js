import { SET_PERSONAL_INFO } from "./ActionType";

//send personal detail to redux state
export const setPersonalInfo=(info)=>{
    return{
        type:SET_PERSONAL_INFO,
        payload:info
    }
}