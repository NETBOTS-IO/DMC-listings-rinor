import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Photos from "./Photos"

const RoomAmenitiesOptions = [
    'Air Conditioning',
    'Heating',
    'Mini-bar',
    'TV',
    'Wi-Fi',
    'Desk',
    'Balcony',
];

const RoomsAndSuites = () => {
    const [rooms, setRooms] = useState([{ id: 1 }]);

    const addRoom = () => {
        const newRoom = {
            id: rooms.length + 1,
        };
        setRooms([...rooms, newRoom]);
    };

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                Rooms and Suites
            </Typography>
            {rooms.map((room) => (

                <Grid container spacing={2} key={room.id}>

                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={['Single', 'Double', 'Suite', 'Twin', 'Deluxe']}
                            renderInput={(params) => (
                                <TextField {...params} label="Room Type" variant="outlined" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Number of Beds" variant="outlined" type="number" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            {RoomAmenitiesOptions.map((amenity) => (
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={amenity}
                                    key={amenity}
                                />
                            ))}
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Photos />
                    </Grid>
                </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={addRoom}>
                Add Room
            </Button>
        </div>
    );
};

export default RoomsAndSuites;
