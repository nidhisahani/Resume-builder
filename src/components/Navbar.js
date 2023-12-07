import { AppBar, Box, CssBaseline, Drawer, IconButton, Stack, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../components/images/Logo.png'




const drawerWidth = 240;

function Navbar() {
  
  const [open, setOpen] = useState(false)
  const pages = [{ path: '/', name: 'Home' }, { path: '/myResumes', name: 'MyResumes' }, { path: '/about', name: 'About' }]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav' position='static' >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: 'white' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={e => setOpen(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavLink to={'/'} >
              <img src={Logo} alt="Logo" width={250} />
            </NavLink>
          </Stack>
          <Stack justifyContent='center' direction="row" spacing={3} flexWrap="wrap" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item, index) => {
              return (
                  <NavLink 
                  key={index}
                  style={({ isActive }) => {
                    return {
                      fontWeight:"bold",
                      color:isActive ? "blue" : "black", 
                      textDecoration:'none'
                    }}}
                    to={`${item.path}`}>{item.name}</NavLink>
              )
            })

            }
          </Stack>

        </Toolbar>
        {/* Mobile view */}
        <Drawer
          sx={{
            justifyContent: 'center',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          anchor="left"
          open={open}
          onClose={e => setOpen(false)}
        >
          <Stack margin={3} direction='column' spacing={2} flexWrap="wrap">
            {pages.map((item, index) => {
              return (
                  <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color:isActive ? "blue" : "black", 
                      textDecoration:'none'
                    }}}
                    to={`${item.path}`}
                    onClick={()=>setOpen(false)}
                    key={index}
                    >
                      {item.name}
                    </NavLink>
              )
            })

            }
          </Stack>
        </Drawer>
      </AppBar>
    </Box>
  )
}

export default Navbar
