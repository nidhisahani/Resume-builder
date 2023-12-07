import { Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setEducation } from '../../Redux/Actions/SetEducation'
import { useFormContext } from 'react-hook-form'



function EducationDetail(props) {
  const dispatch = useDispatch()

  // 'react-hook-form' for Validation
  const { control, handleSubmit, register, formState: { errors } } = useFormContext({
  })

  // move to previous form {Personal Info}
  const handleBack = () => {
    props.setActiveComponent('Work Experience')
  }

  const handleNext = (data) => {

    //dispatching education data to redux
    dispatch(setEducation(data.education))

    // set next component of form to activeComponent
    props.setActiveComponent('Key Skills')
    console.log(data)

  }
  return (
    <Stack>
      <Stack height='40px' padding='15px'>
        <Typography textAlign='center'>Education Details</Typography>
      </Stack>
      <Divider />
      <form onSubmit={handleSubmit(handleNext)}>

        <Stack direction='column' padding='30px' spacing={3}>
          <TextField
            control={control}
            size='small'
            placeholder='Type'
            {...register(`education.Type`, { required: true })}
            error={errors.education?.Type?.type === 'required' ? true : false}
            helperText={errors.education?.Type?.type && 'this field is required'}
          />
          <Stack direction='row' spacing={2}>
            <TextField
              control={control}
              size='small'
              sx={{ width: '200px' }}
              placeholder='University'
              {...register(`education.University`, { required: true })}
              error={errors.education?.University?.type === 'required' ? true : false}
              helperText={errors.education?.University?.type && 'this field is required'}
            />
            <TextField
              control={control}
              size='small'
              sx={{ width: '200px' }}
              placeholder='Degree'
              {...register(`education.Degree`, { required: true })}
              error={errors.education?.Degree?.type === 'required' ? true : false}
              helperText={errors.education?.Degree?.type && 'this field is required'}
            />
          </Stack>
          <Stack direction='row' spacing={2}>
            <TextField
              control={control}
              size='small'
              sx={{ width: '200px' }}
              placeholder='StartYear'
              {...register(`education.StartYear`, { required: true })}
              error={errors.education?.StartYear?.type === 'required' ? true : false}
              helperText={errors.education?.StartYear?.type && 'this field is required'}
            />
            <TextField
              control={control}
              size='small'
              sx={{ width: '200px' }}
              placeholder='EndYear'
              {...register(`education.EndYear`, { required: true })}
              error={errors.education?.EndYear?.type === 'required' ? true : false}
              helperText={errors.education?.EndYear?.type && 'this field is required'}
            />

          </Stack>


        </Stack>

        <Divider />
        <Stack direction='row' spacing={3} p='15px' justifyContent='center'>
          <Button onClick={handleBack} variant='outlined'>Back</Button>
          <Button type='submit' variant='outlined'>Next</Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default EducationDetail
