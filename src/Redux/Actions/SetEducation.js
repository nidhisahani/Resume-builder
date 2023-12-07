import { SET_EDUCATION } from "./ActionType";


//send Education detail to redux state
export const setEducation=(education)=>{
    return{
        type:SET_EDUCATION,
        payload:education
    }
}