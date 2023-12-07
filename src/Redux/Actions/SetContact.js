import { SET_CONTACT } from "./ActionType";

//send contact detail to redux state
export const setContact=(contact)=>{
    return {
        type:SET_CONTACT,
        payload:contact
    }
}