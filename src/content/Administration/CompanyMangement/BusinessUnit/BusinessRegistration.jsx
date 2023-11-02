import React from 'react'
import { Box, Container, Typography, FormControl, TextField, Select, MenuItem, Stack, Button } from '@mui/material';

const BusinessRegistration = () => {
    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <form>
                    <Box sx={{ mb: 1, mt: 5, ml: 2, mr: 2, p: 2, borderBottom: 'solid', borderColor: 'black' }}>
                        <Typography variant='h5'>Business Unit Registration</Typography>
                    </Box>
                    <Box ml={5}>
                        <Typography variant='h4'>Business Unit</Typography>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography>Business Unit Name</Typography>
                            <TextField id="outlined-basic" label="Business Unit Name" variant="outlined" />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography>Business Unit Code</Typography>
                            <TextField id="outlined-basic" label="Business Unit Code" variant="outlined" />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography>Business Head</Typography>
                            <TextField id="outlined-basic" label="Business Head" variant="outlined" />
                        </FormControl>
                    </Box>
                    <Typography variant='h6'>Address</Typography>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <TextField
                            label=" Address:"
                            multiline
                            rows={4}
                           
                            fullWidth

                        />
                    </Box>


                    <Box

                       
                        sx={{
                            '& > :not(style)': { ml: 4, mt: 3, width: '57.5ch' },
                        }}
                        
                    >
                        <FormControl>
                            <Typography >Country *</Typography>
                            <Select value='coun'> <MenuItem value='coun' >Pakistan</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Typography >Suburb</Typography>
                            <Select value='sele'> <MenuItem value='sele' >Select</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Typography >State</Typography>
                            <Select value='sele'> <MenuItem value='sele' >Select</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Typography >City *</Typography>
                            <TextField id="outlined-basic" label='City *' variant="outlined" />
                        </FormControl>
                        <FormControl>
                            <Typography >Post Code</Typography>
                            <TextField id="outlined-basic" label='Post Code' variant="outlined" />
                        </FormControl>
                    </Box>

                    <Typography ml={4}>Mobile</Typography>
                    <Box display='flex' flexDirection='row'
                        component="form"
                        sx={{
                            '& > :not(style)': { ml: 4, mt: 1, width: '30.5ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <FormControl>
                            <Select value='count'> <MenuItem value='count' >Select Country</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '120px' }}>
                            <TextField id="outlined" label="Code" variant='outlined' />
                        </FormControl>
                        <FormControl sx={{ width: '580px' }} >
                            <TextField id="outlined" label="Mobile" />
                        </FormControl>
                    </Box>

                    <Typography ml={4}>Phone</Typography>
                    <Box display='flex' flexDirection='row'
                        component="form"
                        sx={{
                            '& > :not(style)': { ml: 4, mt: 1, width: '30.5ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <FormControl>
                            <Select value='count'> <MenuItem value='count' >Select Country</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '120px' }}>
                            <TextField id="outlined" label="Code" variant='outlined' />
                        </FormControl>
                        <FormControl sx={{ width: '200px' }} >
                            <TextField id="outlined" label="Area Code" />
                        </FormControl>
                        <FormControl sx={{ width: '160px' }} >
                            <TextField id="outlined" label="Phone Number " />
                        </FormControl>
                        <FormControl sx={{ width: '160px' }} >
                            <TextField id="outlined" label="Extn" />
                        </FormControl>
                    </Box>



                    <Typography ml={4}>Fax</Typography>
                    <Box display='flex' flexDirection='row'
                        component="form"
                        sx={{
                            '& > :not(style)': { ml: 4, mt: 1, width: '30.5ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <FormControl>
                            <Select value='count'> <MenuItem value='count' >Select Country</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '120px' }}>
                            <TextField id="outlined" label="Code" variant='outlined' />
                        </FormControl>
                        <FormControl sx={{ width: '200px' }} >
                            <TextField id="outlined" label="Area Code" />
                        </FormControl>
                        <FormControl sx={{ width: '160px' }} >
                            <TextField id="outlined" label="Fax" />
                        </FormControl>
                        <FormControl sx={{ width: '160px' }} >
                            <TextField id="outlined" label="Extn" />
                        </FormControl>
                    </Box>
                    <Box ml={4} sx={{
                        width: '119.5ch', mt: 2,
                    }}>
                        <FormControl fullWidth>
                            <Typography >Email</Typography>
                            <TextField type='email' required='' id="outlined-basic" label='Email' variant="outlined" />
                        </FormControl>
                    </Box>
                    <Box ml={4} sx={{
                        width: '119.5ch', mt: 2,
                    }}>
                        <FormControl fullWidth>
                            <Typography >IATA Code</Typography>
                            <TextField type='email' id="outlined-basic" label='IATA Code' variant="outlined" />
                        </FormControl>
                    </Box>
                    <Box ml={4} sx={{
                        width: '119.5ch', mt: 2,
                    }}>
                        <FormControl fullWidth>
                            <Typography >NPWP No</Typography>
                            <TextField type='email' id="outlined-basic" label='NPWP No' variant="outlined" />
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: 2, mb: 1, p: 3 }}>
                        <Typography variant='h5'>Business Unit Logo</Typography>
                        <Button variant="contained">Contained</Button>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, ml: 2, mb: 5, mr: 10 }}>
                        <Button variant='contained' color='error' sx={{ mr: 2 }}>Close</Button>
                        <Button variant='contained'>Save</Button>
                    </Box>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default BusinessRegistration