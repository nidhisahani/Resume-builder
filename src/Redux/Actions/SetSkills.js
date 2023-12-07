import {SET_SKILLS} from './ActionType'

//send skills to redux state
const setSkills=(skills)=>{
    return{
        type:SET_SKILLS,
        payload:skills
    }
}

export default setSkills;