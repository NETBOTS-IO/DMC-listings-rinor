// PropertyDetails.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PropertyDetails = () => {
    return (
        <div style={{ margin: "20px" }}>
            <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                Add Property Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                    <TextField label="Hotel Name" variant="outlined" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Autocomplete
                        options={[
                            'Hotel',
                            'B&B',
                            'Apartment',
                            'Resort',
                            'Villa',
                            'Hostel',
                        ]}
                        renderInput={(params) => (
                            <TextField {...params} label="Property Type" variant="outlined" />
                        )}

                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} sm={12}>
                        <TextField label="Address" variant="outlined" fullWidth />
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField label="City" variant="outlined" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField label="State/Province" variant="outlined" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField label="Postal/ZIP Code" variant="outlined" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Autocomplete
                        options={[
                            'Skardu',
                            'Shigar',
                            'Kharmang',
                            'Ghanche',
                            'Roundhu',
                            'Astore',
                            'Gilgit',
                            'Hunza',
                            'Nagar',
                            'Ghizer',
                            'Diamer',
                        ]}
                        renderInput={(params) => (
                            <TextField {...params} label="District" variant="outlined" />
                        )}

                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default PropertyDetails;
