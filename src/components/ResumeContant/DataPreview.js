import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import JsPDF from 'jspdf'
import { saveResume } from '../../Redux/Actions/SaveResume'
import domtoimage from 'dom-to-image';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';




function DataPreview(props) {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [fileName, setFileName] = useState('');

  const [confirmation,setConfirmation]=useState(false)

  const resume = useSelector(state => state.setTemplateReducer)

  console.log(resume.state)

  const handleSavePdf = () => {

    const resumeFile = document.getElementById('resume')
    domtoimage.toPng(resumeFile).then(function (dataUrl) {
      var img = new Image()
      img.src = dataUrl;
      var pdf = new JsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(img, "JPEG", 0, 0, width, height);
      pdf.save(`${fileName}.pdf`);
      dispatch(saveResume(resume.state))
      setConfirmation(true)
    })
      .catch(function (error) {
        console.log(error)
      });
  }
  
   const handleClose=()=>{
     setConfirmation(false)
     navigate('/MyResumes')

   }

  const handleBack = () => {
    props.setActiveComponent('Key Skills')
  }
  return ( 
    <Stack container direction={{ xs: 'column', sm: 'row' }} marginTop='50px' height="auto" width="auto">
      <Stack flex={2} component='div' id='resume' >
          {resume.state.data}
      </Stack>
      <Stack flex={1} padding={10}>
        <Typography>Create File Name</Typography>
        <TextField size='small' value={fileName} onChange={(e) => setFileName(e.target.value)} name='pdfName' type='text' />
        <Stack direction='row'>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleSavePdf}>Save</Button>
        </Stack>
      </Stack>
      {confirmation === true? (
      <Dialog
        open={confirmation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent >
          <CheckRoundedIcon sx={{justifyContent:'center'}} color='primary' />
          <DialogContentText id="alert-dialog-description">
            Your Resume has been seccessfully saved
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
      ):" "
    }
    </Stack>
  )
}

export default DataPreview
