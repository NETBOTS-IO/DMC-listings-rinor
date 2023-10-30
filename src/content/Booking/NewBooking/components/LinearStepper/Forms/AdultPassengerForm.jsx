import React from 'react';
import AdultPassengerAccordion from '../../UI_FormComponents/Accordions/AdultPassengerAccordion';

function AdultPassengerForm({ register, numberOfAdults, ticketIndex }) {
  return (
    <React.Fragment>
      {Array.from({ length: numberOfAdults }).map((_, index) => (
        <AdultPassengerAccordion
          key={index}
          ticketIndex={ticketIndex}
          title={`Adult ${index + 1}`}
          subtitle="Enter the details of the passenger."
          index={index}
          register={register}
        />
      ))}
    </React.Fragment>
  );
}

export default AdultPassengerForm;
