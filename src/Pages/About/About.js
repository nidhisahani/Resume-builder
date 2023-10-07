import { Container, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {
  return (
    <Container sx={{marginTop:8}}>
        <Typography variant='h3' component='h1' gutterBottom>Resume Builder</Typography>
        <Typography variant='body2' sx={{fontFamily:'cursive',textAlign:'left' ,width:'50%'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tempora illum ipsum ipsa porro unde error autem saepe non inventore deleniti dolorem excepturi, quae dolorum dolores eveniet deserunt aliquam accusamus totam praesentium a repellendus natus et! Unde hic voluptatem dolore rem sed dolorem asperiores amet quam, totam tempore assumenda maiores. Accusantium nam laboriosam illum architecto alias consequatur commodi, officia eius nesciunt quod! Unde laborum possimus id reiciendis. Molestiae nobis libero nostrum blanditiis labore quis sunt atque eum cumque consectetur expedita aliquam rem eaque velit dolor, nihil quod vel repellendus. Pariatur reprehenderit officia, ea veritatis voluptate at nobis perferendis commodi porro!
        </Typography>
        <Typography variant='h6' component='h1' sx={{marginTop:5}}>Share with your frends</Typography>
        
    </Container>
  )
}

export default About
