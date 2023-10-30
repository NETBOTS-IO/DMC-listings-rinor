import React from 'react';
import { Box, Container, Typography, TextField, Select, MenuItem, Button, FormControl, FormLabel, Grid } from '@mui/material';

const ManageCard = () => {
    const cardOption = ['Credit Card', 'Debit Card', 'Other Card'];
    const cardType = ['Visa', 'Master'];
    const currentDate = new Date();

    // Calculate the minimum date (current month and year)
    const minDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;

    // Calculate the maximum date (11 years forward from the minimum date)
    const maxDate = `${currentDate.getFullYear() + 11}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;

    return (
        <React.Fragment>
            <Container maxWidth='lg' sx={{ p: 0 }}>
                <Box sx={{ mb: 1, mt: 5, ml: 2, mr: 2, p: 2, borderBottom: 'solid', borderColor: 'black' }}>
                    <Typography variant='h4'>Manage Card</Typography>
                </Box>

                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Card Name"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl fullWidth>
                                <FormLabel>Card Options</FormLabel>
                                <Select
                                    value=""
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    {cardOption.map((cardOption) => (
                                        <MenuItem value={cardOption} key={cardOption}>
                                            {cardOption}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl fullWidth>
                                <FormLabel>Card Type</FormLabel>
                                <Select
                                    value=""
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    {cardType.map((cardType) => (
                                        <MenuItem value={cardType} key={cardType}>
                                            {cardType}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name on Card"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Card Number"
                                fullWidth
                                type='number'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Expiry Date"
                                fullWidth
                                type='month'
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    min: minDate,
                                    max: maxDate,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Billing Address"
                                fullWidth
                                minRows={2}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <Box sx={{ ml: 2, mr: 10, mb: 5, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="error" sx={{ mr: 3, minWidth: 150 }}>
                    Close
                </Button>

                <Button variant="contained" sx={{ minWidth: 150 }}>
                    Save
                </Button>
            </Box>
        </React.Fragment>
    );
}

export default ManageCard;
