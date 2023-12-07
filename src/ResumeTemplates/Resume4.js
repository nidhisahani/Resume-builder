import { Avatar, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

function Resume4() {
  const personalData = useSelector(state => state.personalInfoReducer)
  console.log(personalData)
  const education = useSelector(state => state.educationReducer)
  console.log(education)
  const experience = useSelector(state => state.experianceReducer)
  console.log(experience)
  const skills = useSelector(state => state.skillReducer)
  return (
    <Paper >
      <Stack direction='column' spacing={5} padding={2}>
        <Stack direction='row'>
          <Stack flex={1} padding={5}>
            <Typography color='primary.light' variant='h4' gutterBottom>{personalData.state.FirstName}{' '}{personalData.state.LastName}</Typography>
            <Typography color='primary.light' variant='h6' gutterBottom>Software Developer</Typography>
          </Stack>
          <Stack flex={1}>
            <Stack>
              <Typography variant='body2'>Email:{'  '}{personalData.state.Email}</Typography>
              <Typography variant='body2'>Phone: {personalData.state.Contact}</Typography>
              <Typography variant='body2'>Address: {personalData.state.Address}{','}<br /> {personalData.state.City}{', '}{personalData.state.State}{', '}{personalData.state.Postal}</Typography>
            </Stack>
            <Stack marginTop={2}>
              <Typography variant='h6' color='primary.light' >Summary</Typography>
              <Divider sx={{ bgcolor: "primary.light" }} />
              <Typography variant='body2' paddingTop={2} textAlign='justify'>{personalData.state.Objective}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant='h6'  color='primary.light'> Experience</Typography>
          <Divider sx={{ bgcolor: "primary.light" }} />
          <Stack paddingTop={2}>
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
        <Stack>
          <Typography variant='h6'  color='primary.light' >Education</Typography>
          <Divider sx={{ bgcolor: "primary.light" }} />
          <Stack paddingTop={2}>
            <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }} >{education.state.Type}{' | '}{education.state.University}</Typography>
            <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{education.state.Degree}</Typography>
            <Typography variant='body1' sx={{ fontStyle: 'italic', textAlign: 'justify' }}>{education.state.StartYear}{' - '}{education.state.EndYear}</Typography>
          </Stack>
        </Stack>
        <Stack>

          <Typography variant='h6'  color='primary.light' >Skills</Typography>
          <Divider sx={{ bgcolor: "primary.light" }} />
          <Stack paddingTop={2}>
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
        
      </Stack>
    </Paper>
  )
}

export default Resume4
