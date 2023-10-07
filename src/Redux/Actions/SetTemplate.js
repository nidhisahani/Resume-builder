import { SET_TEMPLATE } from "./ActionType";

export const setTemplate=(template)=>{
    return{
        type:SET_TEMPLATE,
        payload:template
    }
}