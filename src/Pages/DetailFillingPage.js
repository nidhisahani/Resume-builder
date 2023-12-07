import React, { useState } from 'react'
import { Container, Stack } from '@mui/material'
import SideNav from '../components/ResumeContant/SideNav'
import PersonalDetail from '../components/ResumeContant/PersonalDetail'
import ExperienceDetail from '../components/ResumeContant/ExperienceDetail'
import EducationDetail from '../components/ResumeContant/EducationDetail'
import KeySkills from '../components/ResumeContant/KeySkills'
import { FormProvider, useForm } from 'react-hook-form'
import DataPreview from '../components/ResumeContant/DataPreview'



function DetailFillingPage() {
  
  const methods = useForm({
    defaultValues: {
      exp: [{
        JobTitle: '',
        Organization: '',
        StartYear: '',
        EndYear: ''
      }],
      skills: [
        { skill: '' },
        { skill: '' }
      ]
     }
  })

  // having current state of active component
  const [activeComponent, setActiveComponent] = useState('Personal Info');

  return (
    <Container>
      {
        activeComponent !== 'Preview' && (
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='center' spacing={2} >
            <Stack direction={{ xs: 'column', sm: 'row' }} >
              {
                <Stack display={{ xs: 'none', sm: 'flex' }}>
                  <SideNav activeComponent={activeComponent} />
                </Stack>
              }
              <Stack direction='column'
                justifyContent='right'
                gap={1}
                sx={{
                  width:'auto',
                  height: "auto",
                  boxShadow: 2,
                  marginLeft: "10px",
                  marginRight:"10px",
                  marginTop: 5,
                }}
              >
                {/* provide all methods that present in the useForm hook to the form components  */}
                <FormProvider {...methods}>
                  {
                    activeComponent === 'Personal Info' && <PersonalDetail setActiveComponent={setActiveComponent} />
                  }
                  {
                    activeComponent === 'Work Experience' && <ExperienceDetail setActiveComponent={setActiveComponent} />
                  }
                  {
                    activeComponent === 'Education' && <EducationDetail setActiveComponent={setActiveComponent} />
                  }
                  {
                    activeComponent === 'Key Skills' && <KeySkills setActiveComponent={setActiveComponent} />
                  }

                </FormProvider>
              </Stack>
            </Stack>
          </Stack>
        )
      }
      <Stack >
        {
          activeComponent === 'Preview' && (<DataPreview setActiveComponent={setActiveComponent} />)
        }
      </Stack>

    </Container>
  )
}

export default DetailFillingPage
