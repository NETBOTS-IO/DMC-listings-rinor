// ContactInformation.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ContactInformation = () => {
    return (
        <div>
            
            <Typography variant="h6" gutterBottom>
                Add Owner Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Phone Number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Additional Number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <TextField label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <TextField label="Social Account" variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactInformation;
