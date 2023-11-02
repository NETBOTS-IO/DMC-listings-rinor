import {
  Box,
  Container,
  Grid,
  Paper,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PassengerDropdown from '../../UI_FormComponents/DropdownForm';
import { number } from 'prop-types';

const BookingInfo = () => {
  const {
    register,
    setValue,
    control,
    unregister,
    resetField,
    formState: { errors }
  } = useFormContext();

  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [tripType, setTripType] = useState('oneWayTrip');

  const { trip, totalTickets } = control._formValues;

  const handleFlightType = (value) => {
    if (value === 'oneWayTrip') {
      setValue('trip', 'oneWayTrip');
      setTripType('oneWayTrip');
      setNumberOfTickets(0);
      setValue('totalTickets', 0);
      for (let index = 0; index < trip.length - 1; index++) {
        unregister(`tickets.${index}`);
      }
    } else if (value === 'roundWayTrip') {
      setValue('trip', 'roundWayTrip');
      setTripType('roundWayTrip');
      setValue('totalTickets', 0);
      setNumberOfTickets(0);
      for (let index = 0; index < trip.length - 1; index++) {
        unregister(`tickets.${index}`);
      }
    } else {
      setTripType('multiCityTrip');
      setValue('trip', 'multiCityTrip');
    }
  };
  useEffect(() => {
    setTripType(trip);
    if (totalTickets !== undefined) {
      setNumberOfTickets(totalTickets);
    }
  }, []);

  const handleTicketFormPopulate = () => {
    setNumberOfTickets(numberOfTickets + 1);
    setValue('totalTickets', numberOfTickets + 1);
  };

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Booking Details
        </Typography>

        <div>
          <div>
            <FormControl
              style={{ marginLeft: '5px' }}
              onChange={(e) => handleFlightType(e.target.value)}
            >
              <RadioGroup>
                <div style={{ display: 'flex' }}>
                  <label htmlFor="oneWayTrip">
                    <input
                      {...register(`trip`)}
                      type="radio"
                      value="oneWayTrip"
                      id="oneWayTrip"
                    />
                    One Way Trip
                  </label>
                  <label htmlFor="roundWayTrip">
                    <input
                      {...register(`trip`)}
                      type="radio"
                      value="roundWayTrip"
                      id="roundWayTrip"
                    />
                    Round Way Trip
                  </label>
                  <label htmlFor="multiCityTrip">
                    <input
                      {...register(`trip`)}
                      type="radio"
                      value="multiCityTrip"
                      id="multiCityTrip"
                    />
                    Multi-City Trip
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <Grid container spacing={1} style={{ marginTop: '15px' }} key={0}>
              <Grid item xs={1.5}>
                <TextField
                  label="From"
                  variant="outlined"
                  {...register(`tickets.defaultTicket.origin`)}
                  helperText={
                    errors.origin?.message ? errors.origin.message : ''
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={1.7}>
                <TextField
                  label="Destination"
                  variant="outlined"
                  {...register(`tickets.defaultTicket.destination`)}
                  helperText={
                    errors.destination?.message
                      ? errors.destination.message
                      : ''
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Journey Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  {...register(`tickets.defaultTicket.journeyDate`)}
                  helperText={
                    errors.journeyDate?.message
                      ? errors.journeyDate.message
                      : ''
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="Return Date"
                  type="date"
                  disabled={tripType === 'oneWayTrip'}
                  variant="outlined"
                  fullWidth
                  {...register(`tickets.defaultTicket.returnDate`)}
                  helperText={
                    errors.returnDate?.message && trip !== 'oneWayTrip'
                      ? errors.returnDate.message
                      : ''
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <PassengerDropdown register={register} setValue={setValue} />
            </Grid>
            {tripType === 'multiCityTrip'
              ? Array.from({ length: totalTickets }).map((_, index) => (
                  <Grid
                    container
                    spacing={1}
                    style={{ marginTop: '15px' }}
                    key={index}
                  >
                    <Grid item xs={1.5}>
                      <TextField
                        label="From"
                        variant="outlined"
                        {...register(`tickets.${index}.origin`)}
                        helperText={
                          errors.origin?.message ? errors.origin.message : ''
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1.7}>
                      <TextField
                        label="Destination"
                        variant="outlined"
                        {...register(`tickets.${index}.destination`)}
                        helperText={
                          errors.destination?.message
                            ? errors.destination.message
                            : ''
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Journey Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        {...register(`tickets.${index}.journeyDate`)}
                        helperText={
                          errors.journeyDate?.message
                            ? errors.journeyDate.message
                            : ''
                        }
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>

                    <Grid item xs={3}>
                      <TextField
                        disabled={tripType === 'oneWayTrip'}
                        label="Return Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        {...register(`tickets.${index}.returnDate`)}
                        helperText={
                          errors.returnDate?.message && trip !== 'oneWayTrip'
                            ? errors.returnDate.message
                            : ''
                        }
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                  </Grid>
                ))
              : ''}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '2.5rem',
              marginBottom: '10px'
            }}
          >
            <Grid
              item
              xs={3}
              hidden={tripType !== 'multiCityTrip'}
              style={{
                marginLeft: '-15px',
                cursor:'pointer'
              }}
            >
              <Container>
                <Paper elevation={2}>
                  <Box
                    onClick={() => handleTicketFormPopulate()}
                    style={{
                      color: '#494A4B',
                      padding: '10px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      marginTop: '5px',
                      marginBottom: '5px'
                    }}
                  >
                    Add another city{' '}
                    <ControlPointIcon style={{ marginLeft: '10px' }} />
                  </Box>
                </Paper>
              </Container>
            </Grid>

            <Grid item xs={1.5}>
              <Controller
                name="pnrNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="PNR"
                    {...field}
                    variant="outlined"
                    fullWidth
                    helperText={
                      errors.pnrNumber?.message ? errors.pnrNumber.message : ''
                    }
                  />
                )}
              />
            </Grid>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default BookingInfo;
