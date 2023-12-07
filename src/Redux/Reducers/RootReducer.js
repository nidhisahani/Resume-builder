import { combineReducers } from 'redux';
import { resumeReducer } from './ResumeReducer';
import { contactReducer } from './ContactReducer';
import { setTemplateReducer } from './TemplateReducer';
import { skillReducer } from './SkillReducer';
import { personalInfoReducer } from './PersonalInfoReducer';
import { experianceReducer } from './ExperianceReducer';
import { educationReducer } from './EducationReducer';

/*this root reducer function is responsible for handling all of the actions that are dispatched, 
and calculating what the entire new state result should be every time.*/
export const rootReducer = combineReducers({
    setTemplateReducer: setTemplateReducer,
    resumeReducer: resumeReducer,
    skillReducer: skillReducer,
    personalInfoReducer: personalInfoReducer,
    experianceReducer: experianceReducer,
    educationReducer: educationReducer,
    contactReducer: contactReducer
})