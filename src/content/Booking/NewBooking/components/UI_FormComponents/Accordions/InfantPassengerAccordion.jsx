import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, TextField } from '@mui/material';

function InfantPassengerDetailAccordion({
  title,
  subtitle,
  register,
  index,
  ticketIndex
}) {
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
        <AccordionDetails style={{ color: 'white' }}>
          <Typography color="darkgrey">{subtitle}</Typography>
          <Container style={{ marginTop: '20px', paddingLeft: '0px' }}>
            <TextField
              {...register(`passengers.infants.${index}.surname`)}
              label="Surname"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              {...register(`passengers.infants.${index}.firstName`)}
              label="First Name"
              variant="outlined"
              margin="dense"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              {...register(`passengers.infants.${index}.dateOfBirth`)}
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
              {...register(`passengers.infants.${index}.ticketNumber`)}
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

export default InfantPassengerDetailAccordion;
