import { Box, Button, Container, Stack } from '@mui/material'
import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import domtoimage from 'dom-to-image';
import EmptyImage from '../components/images/Empty.png'


function MyResumes() {
    const resumes = useSelector(state => state.resumeReducer)
    const [hoveredItem, setHoveredItem] = useState(Array(resumes.resume.length).fill(false))

    // downloading existing resume as a pdf with name 'resume'
    const handleSavePdf = (index) => {

        const resumeFile = document.getElementById(`resume${index}`)
        domtoimage.toPng(resumeFile).then(function (dataUrl) {
            var img = new Image()
            img.src = dataUrl;
            var pdf = new jsPDF("p", "mm", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(img, "JPEG", 0, 0, width, height);
            pdf.save(`${'resume'}.pdf`);
        })
            .catch(function (error) {
                console.log(error)
            });
    }

    const handleMouseExit = (index) => {
        const newhoverdItem = [...hoveredItem]
        newhoverdItem[index] = false
        setHoveredItem(newhoverdItem)
    }

    const hanldeMouseEnter = (index) => {
        const newhoverdItem = [...hoveredItem]
        newhoverdItem[index] = true
        setHoveredItem(newhoverdItem)
    }
    return (
        <Container>

            {
                resumes.resume.length > 0 ?
                    (<Stack display={'flex'} justifyContent='center' spacing={3} marginTop={3}>
                        {/* Iterating over each resume present in redux store */}
                        {Object.keys(resumes.resume).map((item, index) => {
                            return (
                                <Stack
                                    key={index}
                                    sx={{ opacity: hoveredItem ? 0.7 : 1 }}
                                    onMouseEnter={() => hanldeMouseEnter(index)}   //handle onMouseEnter event
                                    onMouseLeave={() => handleMouseExit(index)}    //handle onMouseLeave event
                                    marginTop={5}
                                >
                                    <Stack id={`resume${index}`} component='div'>
                                        {resumes.resume[index].data}

                                    </Stack>
                                    {hoveredItem[index] && (
                                        // Button to download resume
                                        <Button
                                            type='button'
                                            variant='contained'
                                            sx={{ position: 'absolute' }}
                                            onClick={() => handleSavePdf(index)} // handle onClick event to download particular indexed resume
                                            onMouseEnter={() => hanldeMouseEnter(index)}    //handle onMouseEnter event
                                            onMouseLeave={() => handleMouseExit(index)}    //handle onMouseLeave event
                                        >
                                            Download
                                        </Button>
                                    )}

                                </Stack>



                            )
                        })}</Stack>)
                    : (<Stack marginTop={3} justifyContent='center' direction="row"  >
                        {/* If there is no resume present in redux store */}
                        <img src={EmptyImage} height='450px' width='400px' alt="empty" />
                    </Stack>)
            }
        </Container>
    )
}

export default MyResumes
