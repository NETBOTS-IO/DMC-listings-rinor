import React from 'react'
import { Box, Container, Typography, TextField, Stack, Button, Checkbox, label } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const AirlineSettings = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div>
            <React.Fragment>
                <Container sx={{ marginTop: '15px', p: '10px' }}>
                    <Box sx={{ mt: '1px', borderBottom: '2px solid black', p: '2' }}>
                        <Typography variant='h5'>
                            Airline Master
                        </Typography>
                    </Box>
                    <Button variant="contained" sx={{ mt: '5px' }}>
                        Airline Details
                    </Button>

                    <br />
                    <Box sx={{ mt: '3px' }}>
                        <Typography variant='h6'>
                            Add new airline
                        </Typography>
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <TextField id="outlined-basic" label="Airline  Name" sx={{ width: '30%' }} />
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <TextField id="outlined-basic" label="Airline Code*" sx={{ width: '30%' }} />
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <TextField id="outlined-basic" label="Airline Numeric Code" sx={{ width: '30%' }} />
                    </Box>
                    <Box sx={{ mt: '10px' }}>
                        <TextField id="outlined-basic" label="Airline Hub" sx={{ width: '30%' }} />
                    </Box>
                    <Checkbox {...label} />LCC
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

                    <Box sx={{ mt: '10px' }}>
                        <input
                            type="file"
                            accept="image/*"
                            id="upload-image"
                            style={{ display: 'none' }}
                        />
                        {/* <label htmlFor="upload-image"> */}
                            <Button
                                variant="outlined"
                                component="span"
                                sx={{ width: '30%', textTransform: 'none' }}
                            >
                                <CloudUploadIcon sx={{ marginRight: '4px',height:'50px' }} /> Upload Logo
                            </Button>
                        {/* </label> */}
                    </Box>


                </Container>
            </React.Fragment>
        </div>
    )
}

export default AirlineSettings