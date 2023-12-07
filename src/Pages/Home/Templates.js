import { Button, Card, CardActionArea, CardMedia, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { template } from '../../Data/data'
import { useNavigate } from 'react-router-dom'
import { setTemplate } from '../../Redux/Actions/SetTemplate'
import { useDispatch } from 'react-redux'

function Templates() {

  const dispatch = useDispatch()

  //Hold state  of each template
  const [hoveredItem, setHoveredItem] = useState(Array(template.length).fill(false))
  const navigate = useNavigate()

  // useState used to hold the templates
  const [temp, setTemp] = useState(template)


  const handleClick = (item) => {
    // dispatching selected template to the redux store using useDispatch method
    dispatch(setTemplate(item))

    setTemp(item);

    //here navigating to the Detail filling page
    navigate('DetailFillingPage');
    console.log(item)
  };

  // set hoveredItem to false  for a particular index template
  const handleMouseExit = (index) => {
    const newhoverdItem = [...hoveredItem]
    newhoverdItem[index] = false
    setHoveredItem(newhoverdItem)
  }

  // set hoveredItem to true  for a particular index template
  const hanldeMouseEnter = (index) => {
    const newhoverdItem = [...hoveredItem]
    newhoverdItem[index] = true
    setHoveredItem(newhoverdItem)
  }

  return (
    <Container>
      <Stack textAlign='center' padding={5}>
        <Typography variant='h4' component='h1' gutterBottom>Templates</Typography>
        <Typography variant='body2' gutterBottom>Select a template to get started</Typography>
      </Stack>


      <Stack spacing={{ xs: 2, sm: 5 }} justifyContent='center' direction="row" useFlexGap flexWrap="wrap">
        {
          //Iterate over each template
          temp.map((item, index) => {
            return (
              <Stack key={index} >
                <CardActionArea sx={{ width: 200, height: 300 }} >
                  <Card sx={hoveredItem ? { bgcolor: 'grey' } : ''}>
                    <CardMedia
                      component={'img'}
                      image={item.thumbnail}
                      alt='img1'
                      sx={{ width: 200, height: 300, opacity: hoveredItem[index] ? 0.8 : 1, }}
                      onMouseEnter={() => hanldeMouseEnter(index)}     //handle onMouseEnter event
                      onMouseLeave={() => handleMouseExit(index)}     //handle onMouseLeave event
                    />

                    {hoveredItem[index] && (
                      <Button
                        type='submit'
                        variant='contained'
                        sx={{ position: 'absolute', left: '20%', top: '40%', }}
                        onClick={() => handleClick(item)}        // handle onClick event
                        onMouseEnter={() => hanldeMouseEnter(index)}    //handle onMouseEnter event
                        onMouseLeave={() => handleMouseExit(index)}     //handle onMouseLeave event
                      >
                        USE TEMPLATE
                      </Button>
                    )}
                  </Card>
                </CardActionArea>
              </Stack>
            )
          })
        }

      </Stack>
    </Container>
  )
}

export default Templates
