import { SET_EDUCATION } from "./ActionType";



export const setEducation=(education)=>{
    return{
        type:SET_EDUCATION,
        payload:education
    }
}