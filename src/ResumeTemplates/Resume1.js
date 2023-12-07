import { Stack, Typography } from '@mui/material'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Resume1() {
  const personalData = useSelector(state => state.personalInfoReducer)
  console.log(personalData)
  const education = useSelector(state => state.educationReducer)
  console.log(education)
  const experience = useSelector(state => state.experianceReducer)
  console.log(experience)
  const skills = useSelector(state => state.skillReducer)

  return (
    <Stack >
      <Stack direction='column' paddingTop='40px'>
        <Stack>
          <Typography variant='h3' textAlign='center'>{personalData.state.FirstName} {personalData.state.LastName}</Typography>
          <Typography variant='h5' gutterBottom textAlign='center'>Web Developer</Typography>
        </Stack>
        <Stack direction='row' padding={2} spacing={3} container>
          <Stack flex={1} padding={2} spacing={2} bgcolor='#EEE4E2'>
            <Typography variant='h6' component='h1' gutterBottom>Contact</Typography>
            <Stack>
              <Typography variant='body1' component='div' gutterBottom><EmailIcon fontSize='small' />{' '}{personalData.state.Email}</Typography>
              <Typography variant='body1' component='div' gutterBottom>{<ContactPageIcon fontSize='small' />}{' '}{personalData.state.Contact}</Typography>
              <Typography ><PlaceIcon fontSize='small' />{' '}{personalData.state.Address}{', '} {personalData.state.City}{', '}{personalData.state.State}{', '}{personalData.state.Postal}</Typography>
            </Stack>
            <Typography variant='h6' component='h1'>Education</Typography>
            <Stack marginTop='25px'>
              <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }} >{education.state.Type}{' | '}{education.state.University}</Typography>
              <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{education.state.Degree}</Typography>
              <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{education.state.StartYear}{' - '}{education.state.EndYear}</Typography>
            </Stack>
            <Typography variant='h6' component='h1'>Skills</Typography>
            <Stack>
              {
                Object.keys(skills.state).map(key => {
                  return (
                    <Stack>
                      <Typography variant='body1' gutterBottom sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{skills.state[key].skill}</Typography>
                    </Stack>
                  )
                })
              }
            </Stack>

          </Stack>
          <Stack flex={2} padding={2}>
            <Typography variant='h6' component='h1'> Summary</Typography>
            <Stack paddingBottom='35px' paddingTop='20px'>
              <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{personalData.state.Objective}</Typography>
            </Stack>
            <Stack paddingBottom='25px'>
              <Typography variant='h6' component='h1'>Experience</Typography>
              <Stack >
                {
                  Object.keys(experience.state).map(key => {
                    return (
                      <Stack paddingTop='20px' key={key}>
                        <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{experience.state[key].JobTitle}</Typography>
                        <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{experience.state[key].Organization}</Typography>
                        <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{experience.state[key].StartYear} {' - '} {experience.state[key].EndYear}</Typography>
                      </Stack>
                    )
                  })
                }
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Resume1
