// Policies.jsx
import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';

const Policies = () => {
    return (
        <div style={{margin:"20px"}}>

            <FormControl component="fieldset">
                <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                    Policies
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Check-in/Check-out Times
                </Typography>
                <RadioGroup row>
                    <FormControlLabel
                        value="Flexible"
                        control={<Radio />}
                        label="Flexible"
                    />
                    <FormControlLabel
                        value="Moderate"
                        control={<Radio />}
                        label="Moderate"
                    />
                    <FormControlLabel
                        value="Strict"
                        control={<Radio />}
                        label="Strict"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <Typography variant="h6" gutterBottom>
                    Pet Policy
                </Typography>

                <RadioGroup row>
                    <FormControlLabel
                        value="Pets Allowed"
                        control={<Radio />}
                        label="Pets Allowed"
                    />
                    <FormControlLabel
                        value="No Pets"
                        control={<Radio />}
                        label="No Pets"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <Typography variant="h6" gutterBottom>
                    Payment Options
                </Typography>


                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Visa"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="MasterCard"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="American Express"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Discover"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Cash"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Mobile Payment"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
};

export default Policies;
