import {combineReducers} from 'redux';
import { resumeReducer } from './ResumeReducer';
import { contactReducer } from './ContactReducer';
import {setTemplateReducer} from './TemplateReducer';
import {skillReducer} from './SkillReducer';
import {personalInfoReducer} from './PersonalInfoReducer';
import {experianceReducer} from './ExperianceReducer';
import {educationReducer} from './EducationReducer';
import {editReducer} from './EditReducer';
import {deleteReducer} from './DeleteReducer'

export const rootReducer=combineReducers({
    setTemplateReducer:setTemplateReducer,
    resumeReducer:resumeReducer,
    skillReducer:skillReducer,
    personalInfoReducer:personalInfoReducer,
    experianceReducer:experianceReducer,
    educationReducer:educationReducer,
    editReducer:editReducer,
    deleteReducer:deleteReducer,
    contactReducer:contactReducer
})