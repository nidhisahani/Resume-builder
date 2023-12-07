import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {
  return (
    <Container sx={{ marginTop: 8 }} >
      <Typography variant='h3' component='h1' gutterBottom>Resume Builder</Typography>

      <Typography variant='body2' sx={{ textAlign: 'justify' }}>
        "It is an application that simplifies the task of creating a resume for individuals. 
        The system is flexible to be used and reduces the need of thinking and designing an appropriate resume according to qualifications. 
        The system is developed to provide an easy means for creating a professional looking resume. 
        Individuals just have to fill up a form that specifies questions from all required fields such as personal questions, educational,experience,and skills . 
        The answers provided by the users are stored and the system automatically generates a well structured resume in the pdf form. "
      </Typography>
      <Typography variant='h6' component='h1' sx={{ marginTop: 5 }}>Share with your frends</Typography>
      <Stack direction='row' spacing={1}>
        <EmailIcon />
        <FacebookIcon color='primary' />
        <LinkedInIcon color='primary' />
        <TwitterIcon color='primary' />
        <WhatsAppIcon color='success' />
      </Stack>

    </Container>
  )
}

export default About
