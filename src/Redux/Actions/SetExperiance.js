import { SET_EXPERIENCE } from "./ActionType";



export const setExperiance=(experiance)=>{
    return{
        type:SET_EXPERIENCE,
        payload:experiance
    }
}