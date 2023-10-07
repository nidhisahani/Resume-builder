import {Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Resume1() {
  return (
    <Paper variant='elevation' >
      <Grid container xs={12} spacing={2} margin={'10px 10px 10px 10px'}>
      <Grid item xs={4} bgcolor='aqua'>
        <Typography variant='h4' textAlign='center' component='h1' gutterBottom>Prachi <br /> Rahud</Typography>
        <Typography sx={{textAlign:'center'}} variant='h6' gutterBottom>Web Developer</Typography>
        <Typography sx={{textAlign:'center'}} gutterBottom>Location</Typography>
        <Typography sx={{textAlign:'center'}}>email address</Typography>
        <Typography sx={{textAlign:'center'}}>contact number</Typography>
        <Typography>Profile <hr /></Typography>
        <Typography>Skills <hr /></Typography>
      </Grid>
      <Grid item xs={8} bgcolor='azure'>
        <Typography variant='h6' component='h1'>Experiance <hr/></Typography>
        <Typography>Education <hr /></Typography>
        
      </Grid>
    </Grid>
    </Paper>
  )
}

export default Resume1
