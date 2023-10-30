import React from 'react'
import { TextField,Box, Container, Typography, FormControl } from '@mui/material'



const ManageDepartments = () => {
  return (
    <React.Fragment>
    <Container maxWidth='md'>
        <Box  sx={{mt:5,display:'flex', justifyContent:'center'}}>
            <Typography variant='h5'>
            Add New Department 
            </Typography>
        </Box>
        <Box mt={1} ml={2} mr={10} p={2}>
                        <FormControl fullWidth>
                                <TextField
                                
                                label="Department Name"
                                />
                        </FormControl>
                    </Box>
    </Container>
</React.Fragment>
  )
}

export default ManageDepartments