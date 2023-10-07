import { SET_CONTACT } from "./ActionType";


export const setContact=(contact)=>{
    return {
        type:SET_CONTACT,
        payload:contact
    }
}