import { Grid, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React from 'react';

const FlightInfo = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Flight Info
        </Typography>
        <Grid container spacing={3} marginBottom={1.5}>
          <Grid item xs={4}>
            <TextField
              label="Airline"
              variant="outlined"
              fullWidth
              {...register('airline')}
              helperText={errors.airline?.message ? errors.airline.message : ''}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Code"
              variant="outlined"
              fullWidth
              {...register('code')}
              helperText={errors.code?.message ? errors.code.message : ''}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Class"
              variant="outlined"
              fullWidth
              {...register('cabin')}
              helperText={errors.cabin?.message ? errors.cabin.message : ''}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Adult Fare"
              variant="outlined"
              fullWidth
              {...register('adultFare')}
              helperText={
                errors.adultFare?.message ? errors.adultFare.message : ''
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Children Fare"
              variant="outlined"
              fullWidth
              {...register('childFare')}
              helperText={
                errors.childFare?.message ? errors.childFare.message : ''
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Infant Fare"
              variant="outlined"
              fullWidth
              {...register('infantFare')}
              helperText={
                errors.infantFare?.message ? errors.infantFare.message : ''
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Sale Commission"
              variant="outlined"
              fullWidth
              {...register('salesCommission')}
              helperText={
                errors.salesCommission?.message
                  ? errors.salesCommission.message
                  : ''
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Taxes"
              variant="outlined"
              inputProps={{
                inputMode: 'numeric'
              }}
              fullWidth
              {...register('taxes')}
              helperText={errors.taxes?.message ? errors.taxes.message : ''}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="%Discount"
              variant="outlined"
              fullWidth
              {...register('discount')}
              helperText={
                errors.discount?.message ? errors.discount.message : ''
              }
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
};

export default FlightInfo;
