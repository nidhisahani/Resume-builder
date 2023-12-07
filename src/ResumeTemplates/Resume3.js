import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

function Resume3() {
  const personalData = useSelector(state => state.personalInfoReducer)
  console.log(personalData)
  const education = useSelector(state => state.educationReducer)
  console.log(education)
  const experience = useSelector(state => state.experianceReducer)
  console.log(experience)
  const skills = useSelector(state => state.skillReducer)
  return (
    <Paper >
      <Stack direction='row' spacing={5}>
        <Stack flex={1} bgcolor='whitesmoke' spacing={3}>
          <Stack>
            <Avatar variant='circle' sx={{ height: 200, width: 200 }}></Avatar>
          </Stack>
          <Stack padding={2}>
            <Stack bgcolor='gray' borderRadius={2}>
              <Typography variant='h6' textAlign='center'>Contact </Typography>
            </Stack>
            <Typography variant='body2'>Address: {personalData.state.Address}{','}<br /> {personalData.state.City}{', '}{personalData.state.State}{', '}{personalData.state.Postal}</Typography>
            <Typography variant='body2'>Phone: {personalData.state.Contact}</Typography>
            <Typography variant='body2'>Email: {personalData.state.Email}</Typography>
          </Stack>

          <Stack marginTop='10px' padding={2}>
            <Stack bgcolor='gray' borderRadius={2}>
              <Typography variant='h6' textAlign='center'>Education</Typography>
            </Stack>
            <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }} >{education.state.Type}{' | '}{education.state.University}</Typography>
            <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{education.state.Degree}</Typography>
            <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{education.state.StartYear}{' - '}{education.state.EndYear}</Typography>
          </Stack>
          <Stack padding={2}>
            <Stack bgcolor='gray' borderRadius={2}>
              <Typography variant='h6' textAlign='center' >Skills</Typography>
            </Stack>
            {
              Object.keys(skills.state).map(key => {
                return (
                  <Stack>
                    <Typography variant='body2' gutterBottom sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{skills.state[key].skill}</Typography>
                  </Stack>
                )
              })
            }
          </Stack>
        </Stack>
        <Stack flex={2} padding={2} spacing={3}>
          <Stack alignItems='center' padding={5} flex={1}>
            <Typography variant='h4' gutterBottom>{personalData.state.FirstName}{' '}{personalData.state.LastName}</Typography>
            <Typography variant='h6' gutterBottom>Software Developer</Typography>
            <br />
            <Typography variant='body2' textAlign='justify'>{personalData.state.Objective}</Typography>
          </Stack>
          <Stack  flex={2}>
            <Stack bgcolor='gray' borderRadius={2}>
              <Typography variant='h6' textAlign='center'>Experience</Typography>
            </Stack>
            {
              Object.keys(experience.state).map(key => {
                return (
                  <Stack paddingTop='10px' key={key}>
                    <Typography variant='body2'  >{experience.state[key].JobTitle} ( {experience.state[key].StartYear} {' - '} {experience.state[key].EndYear} )</Typography>
                    <Typography variant='body2'  >{experience.state[key].Organization}</Typography>
                  </Stack>
                )
              })
            }
          </Stack>

        </Stack>
      </Stack>
    </Paper>
  )
}

export default Resume3
