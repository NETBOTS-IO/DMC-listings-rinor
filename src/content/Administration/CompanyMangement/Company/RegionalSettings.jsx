import React from 'react';
import { Box, Container, Typography, FormControl, Select, FormLabel, Button, MenuItem, FormControlLabel, Checkbox, TextField, Grid } from '@mui/material';

const RegionalSettings = () => {
    return (
        <React.Fragment>
            <Container maxWidth='lg' sx={{ p: 0 }}>
                <Box sx={{ mt: 5, ml: 2, mr: 2, p: 2, borderBottom: 'solid', borderColor: 'black' }}>
                    <Typography variant='h4'>Regional Settings</Typography>
                </Box>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <FormLabel>Business Location</FormLabel>
                                <Select value='pakistan'>
                                    <MenuItem value='pakistan'>Pakistan</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <FormLabel>Time Zone</FormLabel>
                                <Select value='GMT+5'>
                                    <MenuItem value='GMT+5'>GMT +5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Check if Daylight Saving applicable"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Language'
                                fullWidth
                                value='English'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Currency'
                                fullWidth
                                value='PKR-Rupees'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Enable Multi-Currency"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <FormLabel>Decimal</FormLabel>
                                <Select value='round'>
                                    <MenuItem value='round'>Round Place</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <FormLabel>Decimal Rounding</FormLabel>
                                <Select value="Always Up">
                                    <MenuItem value='none'>None</MenuItem>
                                    <MenuItem value='Always Up'>Always Up</MenuItem>
                                    <MenuItem value='Always Down'>Always Down</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                label='Start Date'
                                type='date'
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                label='End Date'
                                type='date'
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 10, mb: 5 }}>
                        <Button variant='contained' color='error' sx={{ mr: 2 }}>Close</Button>
                        <Button variant='contained'>Save</Button>
                    </Box>
                </form>
            </Container>
        </React.Fragment>
    );
}

export default RegionalSettings;
