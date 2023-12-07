import { Button, Divider, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setPersonalInfo } from '../../Redux/Actions/SetPersonalInfo'



function PersonalDetail(props) {
  
  const dispatch = useDispatch()

    // 'react-hook-form' for Validation
  const { register, control, handleSubmit ,formState:{errors}} = useFormContext()
  
  
  const handleNext = (data) => {
    // set next component of form to activeComponent
    props.setActiveComponent('Work Experience')

    // dispatch data to redux
    dispatch(setPersonalInfo(data.personalInfo))
  }

  return (
    <Stack padding={3}  marginTop='15px'>
      <form onSubmit={handleSubmit(handleNext)}>
        <Stack direction='column' spacing={3}>
          <Stack direction='row' spacing={3}>
            <TextField
              control={control}
              sx={{ width: '250px' }}
              size='small'
              placeholder='First Name'
              {...register("personalInfo.FirstName",{required:true})}
              error={errors.personalInfo?.FirstName?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.FirstName?.type === 'required' && 'This field is required'}
            />
            
            <TextField
              control={control}
              sx={{ width: '250px' }}
              size='small'
              placeholder='Last Name'
              {...register('personalInfo.LastName', { required: true })}
              error={errors.personalInfo?.LastName?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.LastName?.type && 'this field is required'}
            />
          </Stack>
          <Stack direction='row' spacing={3}>
            <TextField
              sx={{ width: '250px' }}
              control={control}
              size='small'
              placeholder='Email'
              {...register('personalInfo.Email', { required: true, pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }})}
              error={errors.personalInfo?.Email?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.Email?.type && 'this field is required'}           
            />

            <TextField
              sx={{ width: '250px' }}
              type='text'
              control={control}
              size='small'
              placeholder='Contact'
              {...register('personalInfo.Contact', { required: true,minLength:10,maxLength:10 })}
              InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> ,inputMode:'numeric'}}
              error={errors.personalInfo?.Contact?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.Contact?.type && 'this field is required'}  
            />
          </Stack>
          <Stack >
            <TextField
              control={control}
              size='small'
              placeholder='Address'
              {...register('personalInfo.Address', { required: true })}
              error={errors.personalInfo?.Address?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.Address?.type && 'this field is required'}
            />
          </Stack>
          <Stack direction='row' spacing={3}>
            <TextField
              sx={{ width: '250px' }}
              control={control}
              size='small'
              placeholder='City'
              {...register('personalInfo.City', { required: true })}
              error={errors.personalInfo?.City?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.City?.type && 'this field is required'}

            />
            <TextField
              sx={{ width: '250px' }}
              control={control}
              size='small'
              placeholder='State'
              {...register('personalInfo.State', { required: true })}
              error={errors.personalInfo?.State?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.State?.type && 'this field is required'}
            />
          </Stack>
          <Stack direction='row' >
            <TextField
              control={control}
              sx={{ width: '250px' }}
              size='small'
              placeholder='Postal'
              {...register('personalInfo.Postal', { required: true })}
              error={errors.personalInfo?.Postal?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.Postal?.type && 'this field is required'}
            />
          </Stack>
          <Stack >
            <TextField
              control={control}
              size='small'
              placeholder='Objective'
              {...register('personalInfo.Objective', { required: true })}
              error={errors.personalInfo?.Objective?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.Objective?.type && 'this field is required'}
            />
          </Stack>  
          <Divider />
          <Stack direction='row' justifyContent='center'>
            <Button type='submit'>Next</Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  )
}

export default PersonalDetail
