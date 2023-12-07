import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {  useFieldArray, useFormContext } from 'react-hook-form'
import setSkills from '../../Redux/Actions/SetSkills'


function KeySkills(props) {
  const dispatch = useDispatch()

    // 'react-hook-form' for Validation
  const { control, register ,handleSubmit ,formState:{errors}} = useFormContext()
  
  // adding multiple skills
  const { append, remove, fields } = useFieldArray({
    control,
    name: "skills"

  })

  //
  const handlePreview = (data) => {

    //dispatching skill data to redux
    dispatch(setSkills(data.skills))

    // set next component of form to activeComponent
    props.setActiveComponent('Preview')
    console.log(data)

  }

  // move to previous form {Education}
  const handleBack = () => {
    props.setActiveComponent('Education')

  }
  return (
    <Stack direction='column' padding='50px'>
      <form onSubmit={handleSubmit(handlePreview)}>
        {
          fields.map((item, index) => {
            return (
              <Box display='-ms-grid' key={item.id}>
                <Typography>skill{index + 1}</Typography>
                <TextField
                    control={control}
                    size='small'
                    sx={{ width: '200px' }}
                    placeholder='skill'
                    {...register(`skills.${index}.skill`, { required: true })}
                    error={errors.skills?.[index]?.skill?.type === 'required' ? true:false}
                    helperText={errors.skills?.[index]?.skill?.type && 'this field is required'}
                  />
                {fields.length > 2 && <Button onClick={() => remove(index)}>Remove</Button>}
              </Box>
            )
          }
          )
        }
        <Button onClick={() => append({ skill: '' })}>Add</Button>
        <Divider />
        <Stack direction='row' justifyContent='center' padding={'15px'} spacing={2} >
          <Button onClick={handleBack}>Back</Button>
          <Button type='submit'>Preview</Button>
        </Stack>
      </form>

    </Stack>
  )
}

export default KeySkills
