import template1 from '../TemplateImages/template1.png'
import template2 from '../TemplateImages/template2.png'
import template3 from '../TemplateImages/template3.png'
import template4 from '../TemplateImages/template4.png'
import Resume1 from '../ResumeTemplates/Resume1'
import Resume2 from '../ResumeTemplates/Resume2'
import Resume3 from '../ResumeTemplates/Resume3'
import Resume4 from '../ResumeTemplates/Resume4'

// Stores All Templates As a json State 
export const template=[
    {
       id:1, 
       thumbnail:template1,
       data:<Resume1 />
    },
    {
        id:2,
        thumbnail:template2,
        data:<Resume2 />
    },
    {
        id:3,
        thumbnail:template3,
        data:<Resume3 />
     },
     {
        id:4,
         thumbnail:template4,
         data:<Resume4 />
     }
]