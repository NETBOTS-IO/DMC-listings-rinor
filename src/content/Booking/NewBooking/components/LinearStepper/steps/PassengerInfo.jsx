/* eslint-disable dot-notation */
/* eslint-disable react/jsx-curly-brace-presence */
import { Paper, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React from 'react';
import AdultPassengerForm from '../Forms/AdultPassengerForm';
import ChildPassengerForm from '../Forms/ChildPassengerForm';
import InfantPassengerForm from '../Forms/InfantPassengerForm';

const PassengerInfo = () => {
  const { control, register } = useFormContext();
  let { tickets, totalTickets, passengers } = control._formValues;
  totalTickets += 1;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passenger Information
      </Typography>
      {/* Default Ticket */}
      {/* <Paper variant="outlined" key="defaultTicket">
        <AdultPassengerForm
          register={register}
          numberOfAdults={tickets["defaultTicket"].numberOfAdults}
          ticketIndex={"defaultTicket"}
        />
        <ChildPassengerForm
          register={register}
          numberOfChildren={tickets["defaultTicket"].numberOfChildren}
          ticketIndex={"defaultTicket"}
        />
        <InfantPassengerForm
          register={register}
          numberOfInfants={tickets["defaultTicket"].numberOfInfants}
          ticketIndex={tickets["defaultTicket"]}
        />
      </Paper> */}
      <Paper
        variant="outlined"
        key="defaultTicket"
        style={{ marginBottom: '10px' }}
      >
        <AdultPassengerForm
          register={register}
          numberOfAdults={
            passengers.numberOfAdults === undefined
              ? 0
              : passengers.numberOfAdults
          }
          ticketIndex={'defaultTicket'}
        />
        <ChildPassengerForm
          register={register}
          numberOfChildren={
            passengers.numberOfChildren === undefined
              ? 0
              : passengers.numberOfChildren
          }
          ticketIndex={'defaultTicket'}
        />
        <InfantPassengerForm
          register={register}
          numberOfInfants={
            passengers.numberOfInfants === undefined
              ? 0
              : passengers.numberOfInfants
          }
          ticketIndex={tickets['defaultTicket']}
        />
      </Paper>
      {/* {Array.from({ length: totalTickets - 1 }).map((_, index) => (
        <Paper variant="outlined" key={index}>
          <AdultPassengerForm
            register={register}
            numberOfAdults={tickets[index].numberOfAdults}
            ticketIndex={index}
          />
          <ChildPassengerForm
            register={register}
            numberOfChildren={tickets[index].numberOfChildren}
            ticketIndex={index}
          />
          <InfantPassengerForm
            register={register}
            numberOfInfants={tickets[index].numberOfInfants}
            ticketIndex={index}
          />
        </Paper>
      ))} */}
    </React.Fragment>
  );
};

export default PassengerInfo;
