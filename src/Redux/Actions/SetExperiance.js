import { SET_EXPERIENCE } from "./ActionType";

//send experiance detail to redux state
export const setExperiance=(experiance)=>{
    return{
        type:SET_EXPERIENCE,
        payload:experiance
    }
}