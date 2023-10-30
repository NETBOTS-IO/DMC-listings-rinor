import React from 'react'
import { Container, Button, Box, Typography, TextField, Stack, MenuItem, Checkbox, FormControl, InputLabel, FormControlLabel, Select, FormLabel } from '@mui/material'
import { Label } from '@mui/icons-material'


const ManageHotelChainCode = () => {
    return (
        <div>
            <React.Fragment>
                <Container>
                    <Box sx={{ mt: '3px' }}>
                        <Typography variant='h6'>
                            Hotel Chain Code
                        </Typography>
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <TextField id="outlined-basic" label=" Hotel Chain Code" sx={{ width: '50%' }} />
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <TextField id="outlined-basic" label=" Hotel Chain Name  " sx={{ width: '50%' }} />
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Supplier Id</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Supplier Id"
                                sx={{ width: '50%' }} 
                            >
                                <MenuItem value={10}>SABRI</MenuItem>
                                <MenuItem value={20}>UPI</MenuItem>
                                <MenuItem value={30}>OTHER</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ mt: '1px' }}>
                            <FormLabel>Status</FormLabel>
                            <FormControlLabel control={<Checkbox  />} label="Active"  sx={{ml:'2px'}} />
                        </Box>

                    </Box>
                    <Box>
                        <Stack direction="row" spacing={1} mt={1}>
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

export default ManageHotelChainCode