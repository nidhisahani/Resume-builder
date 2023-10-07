import { AppBar, Box, CssBaseline, Drawer, IconButton, MenuItem, Stack, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../components/images/Logo.png'




const drawerWidth = 240;

function Navbar() {
  const [open, setOpen]=useState(false)
  return (
    <Box sx={{display:'flex'}}>
        <CssBaseline />
        <AppBar component='nav' position='static' >
            <Toolbar sx={{display:'flex', justifyContent:'space-between' ,bgcolor:'white'}}>
                <IconButton 
                   aria-label="open drawer"
                   edge="start"
                   onClick={e=>setOpen(true)}
                   sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon/>
                </IconButton>
                <Stack sx={{display:{xs:'none',sm:'block'}}}>
                  <NavLink to={'/'} >
                    <img src={Logo} alt="Logo" width={250}  />
                  </NavLink>
                </Stack>
                
                <Stack direction='row' spacing={3}  sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NavLink style={{textDecoration:'none'}} to={'/'}>Resume Templets</NavLink>
                <NavLink style={{textDecoration:'none'}} to={'/myResumes'}>My Resumes</NavLink>
                <NavLink style={{textDecoration:'none'}} to={'/about'}>About Us</NavLink>
                </Stack>
            </Toolbar>
            <Drawer
          sx={{
            justifyContent:'center',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          anchor="left"
          open={open}
          onClose={e=>setOpen(false)}
        >
            <Stack margin={'40px 5px'} >
                <NavLink  style={{textDecoration:'none'}}  to={'/'}><MenuItem>Resume Templets</MenuItem></NavLink>
                <NavLink style={{textDecoration:'none'}} to={'/myResumes'}><MenuItem>My Resumes</MenuItem></NavLink>
                <NavLink style={{textDecoration:'none'}} to={'/about'}><MenuItem>About Us</MenuItem></NavLink>
            </Stack>   
        </Drawer>
        </AppBar>
    </Box>
  ) 
}

export default Navbar
