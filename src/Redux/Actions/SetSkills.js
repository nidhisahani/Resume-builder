import {SET_SKILLS} from './ActionType'


export const setSkills=(skills)=>{
    return{
        type:SET_SKILLS,
        payload:skills
    }
}