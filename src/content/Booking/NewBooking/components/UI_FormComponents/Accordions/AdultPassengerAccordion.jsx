import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, TextField } from '@mui/material';

function AdultPassengerDetailAccordion({ title, subtitle, register, index }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="darkgrey">{subtitle}</Typography>

          <Container style={{ marginTop: '20px', paddingLeft: '0px' }}>
            <TextField
              // {...register(`tickets.${ticketIndex}.adults.${index}.surname`)}
              {...register(`passengers.adults.${index}.surname`)}
              label="Surname"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />

            <TextField
              {...register(`passengers.adults.${index}.firstName`)}
              label="First Name"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              {...register(`passengers.adults.${index}.email`)}
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              {...register(`passengers.adults.${index}.phoneNumber`)}
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              {...register(`passengers.adults.${index}.dateOfBirth`)}
              label="Date of Birth"
              variant="outlined"
              margin="dense"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              {...register(`passengers.adults.${index}.ticketNumber`)}
              label="Ticket Number"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AdultPassengerDetailAccordion;
