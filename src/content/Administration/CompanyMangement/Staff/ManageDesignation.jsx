import React from 'react'
import { Box, Container, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Stack, Button, FormLabel } from '@mui/material'

const ManageDesigantion = () => {
  return (
    <div>
        <React.Fragment>
            <Container sx={{ marginTop: '15px', p: '10px' }}>
                <Box sx={{ mt: '1px' }}>
                    <Typography>
                        Add New Designation
                    </Typography>
                </Box>
                <Box sx={{ mt: '8px'}}>
                    <TextField id="outlined-basic" label="Designation Name" sx={{ width: '30%'}} />
                </Box>
                <Box sx={{ mt: '10px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Dashboard Type</InputLabel>
                        <Select sx={{ width: '30%', height: '50px' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Designation Name"
                        >
                            <MenuItem value={10}>AdminWidget</MenuItem>
                            <MenuItem value={20}>FinancialDashboard</MenuItem>
                            <MenuItem value={30}>Third</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <Stack direction="row" spacing={1} mt={4}>
                        <Button variant="contained" color="success">
                            Save
                        </Button>
                        <Button variant="outlined" color="error">
                            Back
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    </div>
)
}

export default ManageDesigantion