import React from 'react';
import { Container, Grid, Typography, TextField, Button, Checkbox, FormControl, FormControlLabel, Select, MenuItem } from '@mui/material';

const Company = () => {
    const handleSubmit = () => {
        // Handle form submission here
    };

    const handleChange = (e) => {
        // Handle input changes here
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 2 }}>
                Basic Agency Details
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Agency Name"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Trading Name"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Address</Typography>
                        <TextField
                            label="Address"
                            multiline
                            rows={4}
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <Select
                                value="Country"
                                onChange={handleChange}
                                displayEmpty
                                size="small"
                            >
                                <MenuItem value="" disabled>
                                    Select Country
                                </MenuItem>
                                <MenuItem value="Country1">Country 1</MenuItem>
                                <MenuItem value="Country2">Country 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <Select
                                value="State"
                                onChange={handleChange}
                                displayEmpty
                                size="small"
                            >
                                <MenuItem value="" disabled>
                                    Select State
                                </MenuItem>
                                <MenuItem value="State1">State 1</MenuItem>
                                <MenuItem value="State2">State 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="City Name"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Postal Code"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <Select
                                value="Country Code"
                                onChange={handleChange}
                                displayEmpty
                                size="small"
                            >
                                <MenuItem value="" disabled>
                                    Select Country Code
                                </MenuItem>
                                <MenuItem value="CountryCode1">Country Code 1</MenuItem>
                                <MenuItem value="CountryCode2">Country Code 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <Select
                                value="Area Code"
                                onChange={handleChange}
                                displayEmpty
                                size="small"
                            >
                                <MenuItem value="" disabled>
                                    Select Area Code
                                </MenuItem>
                                <MenuItem value="AreaCode1">Area Code 1</MenuItem>
                                <MenuItem value="AreaCode2">Area Code 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Phone Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Website"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Service Tax No"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="ATOL Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="PAN Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="TAN Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="ABTA Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="TA Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="ABN Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="ACN Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Tax Title"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Tax Number"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Define Point of Sale (POS)"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="POS Calculate Basis"
                            onChange={handleChange}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} />}
                            label="Uniform tax for all Branches"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Basic Conditions</Typography>
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} />}
                            label="All booking documents should have Agency address & logo"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} />}
                            label="All booking documents should have Business Unit address & logo"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} />}
                            label="All booking documents should have Branch address & logo"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} />}
                            label="SubAgent address & logo should be printed on b2b booking documents"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} />}
                            label="Payable by supplier name should be printed on voucher"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="flex-end" mt={2}>
                    <Button variant="contained" color="error" sx={{ minWidth: 150 }}>
                        Close
                    </Button>
                    <Button variant="contained" sx={{ minWidth: 150 }}>
                        Save
                    </Button>
                </Grid>
            </form>
        </Container>
    );
};

export default Company;
