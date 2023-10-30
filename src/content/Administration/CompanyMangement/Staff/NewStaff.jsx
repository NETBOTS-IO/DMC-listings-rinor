
import React, { useState } from 'react'
import { Container, Box, Grid, Typography, FormControl, Checkbox, Button, FormGroup, TextField, FormControlLabel, Select, MenuItem, FormLabel } from '@mui/material'


const NewStaff = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [availableOptions, setAvailableOptions] = useState([
        { value: '2793', label: 'Rinor1 (SMC-PVT) LTD' },
        { value: '2795', label: 'Rinor3 (SMC-PVT) LTD' },
        { value: '2794', label: 'Rinor2 (SMC-PVT) LTD' },
    ]);

    const handleAdd = () => {
        // Move selected options from availableOptions to selectedOptions
        const selectedValue = availableOptions.find((option) =>
            selectedOptions.every((selectedOption) => selectedOption.value !== option.value)
        );
        if (selectedValue) {
            setSelectedOptions([...selectedOptions, selectedValue]);
            setAvailableOptions(availableOptions.filter((option) => option.value !== selectedValue.value));
        }
    };

    const handleRemove = () => {
        // Get the first selected option
        const selectedValue = selectedOptions.find((option) =>
            availableOptions.every((availableOption) => availableOption.value !== option.value)
        );

        if (selectedValue) {
            setSelectedOptions(selectedOptions.filter((option) => option.value !== selectedValue.value));
            setAvailableOptions([...availableOptions, selectedValue]);
        }
    }
    return (

        <React.Fragment>
            <Container maxWidth='lg'>
                <Box borderBottom='solid 1px' borderColor='black' mt={5} mb={1} p={3}>
                    <Typography variant='h4'>Create New Staff</Typography>
                </Box>
                <form>
                    <Box mt={1} ml={2} mr={10} p={1}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Agency Name</Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                disabled
                                id="outlined-disabled"
                                defaultValue="Rinor (SMC-PVT) LTD"
                            />
                        </FormControl>
                    </Box>
                    <Box ml={2} mr={10} p={1}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Branch</Typography>
                            <Select value='branch'> <MenuItem value='branch'>Select Branch</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box ml={2} mr={10} p={1}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Region</Typography>

                            <Select>
                                <MenuItem value='pak'>Pakistan</MenuItem>
                                <MenuItem value='ind'>India</MenuItem>
                                <MenuItem value='nep'>Nepal</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box halfwidth ml={2} >
                        <Checkbox {...label} />
                        <FormLabel>Select All/De-Select All</FormLabel>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Other Branch Access</Typography>
                            <Grid container spacing={2}>
                                <Grid item md={5}>
                                    <Select
                                        multiple
                                        native
                                        value={selectedOptions.map((option) => option.value)}
                                        onChange={(e) => {
                                            const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
                                            const selectedItems = availableOptions.filter((option) =>
                                                selectedValues.includes(option.value)
                                            );
                                            setSelectedOptions(selectedItems);
                                        }}
                                        style={{ width: '100%' }}
                                    >
                                        {availableOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item md={2} className="pt-3 pb-3 pb-md-4 mt-md-4">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        fullWidth
                                        onClick={handleAdd}
                                    >
                                        Add
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                        onClick={handleRemove}
                                        style={{ marginTop: '1rem' }}
                                    >
                                        Remove
                                    </Button>
                                </Grid>
                                <Grid item md={5}>
                                    <Select
                                        multiple
                                        native
                                        value={selectedOptions.map((option) => option.value)}
                                        onChange={(e) => {
                                            const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
                                            const selectedItems = selectedOptions.filter((option) =>
                                                selectedValues.includes(option.value)
                                            );
                                            setSelectedOptions(selectedItems);
                                        }}
                                        style={{ width: '100%' }}
                                    >
                                        {selectedOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>


                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Department</Typography>
                            <Select>
                                <MenuItem value='dep'>Selext Department</MenuItem>
                                <MenuItem value='sal'>Sales</MenuItem>
                                <MenuItem value='hum'>Human Resources</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Designation</Typography>
                            <Select>
                                <MenuItem value='ad'>Administration </MenuItem>
                                <MenuItem value='ag'>Sales Agent</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Primary Role *</Typography>
                            <Select>
                                <MenuItem value='slt'>KATDMIN-SLT </MenuItem>
                                <MenuItem value='kh'>KHAN-SLD </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth mr={10} p={1}>
                            <Typography variant='h6' >Secondary  Role *</Typography>
                            <Select>
                                <MenuItem value='slt'>KATDMIN-SLT </MenuItem>
                                <MenuItem value='kh'>KHAN-SLD </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Select Team</Typography>
                            <Select>
                                <MenuItem value='slt'>KATDMIN-SLT </MenuItem>
                                <MenuItem value='kh'>KHAN-SLD </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Employee Name *</Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Staff Code
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Nick Name
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>

                    <Typography ml={4} variant='h6'>Phone1 *</Typography>
                    <Box display='flex' flexDirection='row'

                        sx={{
                            '& > :not(style)': { ml: 4, mt: 1, width: '30.5ch' },
                        }}

                    >

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
                    <Typography ml={4} variant='h6'>Phone2 </Typography>
                    <Box

                        sx={{
                            '& > :not(style)': { ml: 4, mt: 1, width: '30.5ch' }, display: 'flex', flexDirection: 'row'
                        }}

                    >

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
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Email
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box halfwidth ml={2} >
                        <Checkbox {...label} />
                        <FormLabel>
                            Apply IP Blocking Policy If Activated
                        </FormLabel>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Daily Booking Limit
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box halfwidth ml={2} >
                        <Checkbox {...label} />
                        <FormLabel>
                            Apply Daily Booking Limit
                        </FormLabel>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Amadeus Id
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Sabre  Id
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' > GalileoId
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' > Login Name *
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' > Password
                            </Typography>
                            <TextField sx={{ backgroundColor: 'lightblack', borderRadius: '5px' }}
                                id="outlined-disabled"
                                defaultValue=""
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <Button variant="outlined">Contained</Button>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Can Handle Enquiry" />
                        </FormGroup>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Can Handle VIP Customer" />
                        </FormGroup>
                    </Box>
                    <Box sx={{ mt: 1, ml: 2, mr: 10 }}>
                        <FormControl fullWidth>
                            <Typography variant='h6' >Select Enquiry Type
                            </Typography>
                            <Select>
                                <MenuItem value='do' selected>Domestic </MenuItem>
                                <MenuItem value='in'>International</MenuItem>
                                <MenuItem value='menu'>Both</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ ml: 2, mr: 10, mb: 5, display: 'flex', justifyContent: 'end' }}>
                        <Button variant="contained" color="error" sx={{ mr: 3, minWidth: 150 }}>
                            Close
                        </Button>

                        <Button variant="contained" sx={{ mr: 3, minWidth: 150 }}>
                            Save
                        </Button>
                    </Box>
                </form>
            </Container >
        </React.Fragment >

    )
}
export default NewStaff