import { SET_TEMPLATE } from "./ActionType";

//send selected template to redux state
export const setTemplate=(template)=>{
    return{
        type:SET_TEMPLATE,
        payload:template
    }
}