import { Button, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

function SideNav(props) {

  // All form components
    const components=['Personal Info','Work Experience','Education','Key Skills']

    

  return (
    <Stack direction='row' spacing={12} marginTop={5} >
      <Grid item xs={4}>
        <TableContainer sx={{width:'200px'}} component={Paper}>
        <Table>  
          <TableBody >
            { 
            // Iterate over all the form component
              components.map((component,id)=>{
                return (
                    
                <TableRow  key={id} >
                   <TableCell >
                     <Button  disabled={component !== props.activeComponent ?'text':''}>{component}</Button>
                   </TableCell>
                </TableRow>
              )})
            }
          </TableBody>
        </Table>
       </TableContainer>
      </Grid>
    </Stack>
  )
}

export default SideNav
