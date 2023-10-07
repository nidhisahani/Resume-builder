import {Button, Card, CardActionArea, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { template } from '../../Data/data'
import { useNavigate } from 'react-router-dom'

function Templates() {
  const [hoveredItem, setHoveredItem]=useState(Array(template.length).fill(false))
  const navigate=useNavigate()
    const [temp ,setTemp]=useState(template)
    

    const handleClick = (item) => {
      setTemp(item);
      navigate('DetailFillingPage');
    };

    const handleMouseExit=(index)=>{
      const newhoverdItem=[...hoveredItem]
      newhoverdItem[index]=false
      setHoveredItem(newhoverdItem)   
    }

    const hanldeMouseEnter=(index)=>{
      const newhoverdItem=[...hoveredItem]
      newhoverdItem[index]=true
      setHoveredItem(newhoverdItem)  
    }

      return (
    <Container sx={{marginTop:5}}>
      <Typography variant='h4' component='h1' gutterBottom>Templates</Typography>
      <Typography variant='body2' gutterBottom>Select a template to get started</Typography>

      <Grid columnGap={12} sx={{marginTop:5, flexGrow:1}} container>
        {
          temp.map((item,ind)=>{
            return(
              <Grid columnGap={4} key={ind} >
                    <CardActionArea sx={{width:200,height:300}} >                           
                       <Card sx={hoveredItem?{bgcolor:'grey'}:''}>  
                            <CardMedia 
                                component={'img'}
                                image={item.thumbnail}
                                alt='img1'
                                sx={{width:200,height:300,opacity: hoveredItem[ind] ? 0.7 : 1,}}
                                onMouseEnter={()=>hanldeMouseEnter(ind)} onMouseLeave={()=>handleMouseExit(ind)}
                            />
                       
                           { hoveredItem[ind] && (
                              <Button 
                                variant='contained' 
                                sx={{position:'absolute',left:'20%' ,top:'40%',}}  
                                onClick={()=>handleClick(item)} 
                                onMouseEnter={()=>hanldeMouseEnter(ind)} 
                                onMouseLeave={()=> handleMouseExit(ind)}
                              >
                                USE TEMPLATE
                              </Button>  
                            )}                  
                       </Card>                         
                    </CardActionArea>                   
           </Grid>
            )
          })
        }
        
      </Grid>
    </Container>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     resume: state.templateReducer
//   };
// };

export default Templates
