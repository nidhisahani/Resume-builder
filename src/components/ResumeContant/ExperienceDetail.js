import { Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setExperiance } from '../../Redux/Actions/SetExperiance'

function ExperienceDetail(props) {
  const dispatch = useDispatch()

  // 'react-hook-form' for Validation
  const { control, handleSubmit, register, formState: { errors } } = useFormContext()


  const { append, remove, fields } = useFieldArray({
    control,
    name: "exp"
  })

  // move to previous form {Personal Info}
  const handleBack = () => {
    props.setActiveComponent('Personal Info')
  }
  
  const handleNext = (data) => {

    //dispatching Experience data to redux
    dispatch(setExperiance(data.exp))

    // set next component of form to activeComponent
    props.setActiveComponent('Education')
    console.log(data)
  }
  return (
    <Stack padding={3} >
      <Stack >
        <Typography textAlign='center' >Work Experience</Typography>
      </Stack>
      <Divider />
      <form onSubmit={handleSubmit(handleNext)}>
        {
          fields.map((item, index) => {
            return (
              <Stack direction='column' spacing={3} key={index}>
                <Typography>Experience {index + 1}</Typography>
                <Stack direction='row'spacing={2}>
                  <TextField
                    control={control}
                    size='small'
                    sx={{ width: '200px' }}
                    placeholder='JobTitle'
                    {...register(`exp.${index}.JobTitle`, { required: true })}
                    error={errors.exp?.[index]?.JobTitle?.type === 'required' ? true : false}
                    helperText={errors.exp?.[index]?.JobTitle?.type && 'this field is required'}
                  />
                  <TextField
                    control={control}
                    size='small'
                    sx={{ width: '200px' }}
                    placeholder='Organization'
                    {...register(`exp.${index}.Organization`, { required: true })}
                    error={errors.exp?.[index]?.Organization?.type === 'required' ? true : false}
                    helperText={errors.exp?.[index]?.Organization?.type && 'this field is required'}
                  />
                </Stack>
                <Stack direction='row' spacing={2}>
                  <TextField
                    control={control}
                    size='small'
                    sx={{ width: '200px' }}
                    placeholder='StartYear'
                    {...register(`exp.${index}.StartYear`, { required: true })}
                    error={errors.exp?.[index]?.StartYear?.type === 'required' ? true : false}
                    helperText={errors.exp?.[index]?.StartYear?.type && 'this field is required'}
                  />
                  <TextField
                    control={control}
                    size='small'
                    sx={{ width: '200px' }}
                    placeholder='EndYear'
                    {...register(`exp.${index}.EndYear`, { required: true })}
                    error={errors.exp?.[index]?.EndYear?.type === 'required' ? true : false}
                    helperText={errors.exp?.[index]?.EndYear?.type && 'this field is required'}
                  />
                </Stack>
                <Stack direction='row' padding='15px' justifyContent='center'>
                  {
                    fields.length > 1 && <Button variant='outlined' onClick={() => remove(index)}>Remove</Button>
                  }
                </Stack>
              </Stack>
            )
          })

        }
        <Stack direction='row' padding='15px' justifyContent='center'>
          <Button variant='outlined' onClick={() => append()}>Add</Button>
        </Stack>
        <Divider />
        <Stack direction='row' justifyContent='center' padding={'15px'} spacing={2}>
          <Button variant='outlined' onClick={handleBack}>Back</Button>
          <Button variant='outlined' type='submit'>Next</Button> 
        </Stack>
      </form>
    </Stack>
  )
}

export default ExperienceDetail
