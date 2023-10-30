import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BookingInfo from './steps/BookingInfo';
import FlightInfo from './steps/FlightInfo';
import PassengerInfo from './steps/PassengerInfo';
import ReviewBooking from './steps/ReviewBooking';
import ConfirmBooking from './steps/ConfirmBooking';
import Checkout from './steps/Checkout';
// import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { validationSchema } from '../utils/formValidationScheme';

// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import StepContent from '@mui/material/StepContent';

// ** Third Party Imports
import clsx from 'clsx';
import toast from 'react-hot-toast';

// ** Styled Component
import StepperWrapper from './stepper';
import StepperCustomDot from '../UI_FormComponents/StepperCustomDot';
import { formDefaultValues } from '../utils/constants';

function getSteps() {
  return [
    {
      title: 'Booking Information',
      subtitle: 'Enter your Booking Details'
    },
    {
      title: 'Flight Information',
      subtitle: 'Enter the Flight Information'
    },
    {
      title: 'Passenger Information',
      subtitle: 'Enter the passenger details'
    },
    {
      title: 'Review Your Booking',
      subtitle: 'Please review your entered details'
    },
    {
      title: 'Confirm the booking',
      subtitle: 'Please enter payment and other forms of authentication'
    },
    {
      title: 'Checkout',
      subtitle: 'You are ready to go!'
    }
  ];
}

const StepperVerticalWithNumbers = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const {
    reset,
    control: { _formValues }
  } = useForm();

  const methods = useForm({
    defaultValues: formDefaultValues
    // resolver: yupResolver(validationSchema),
  });

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNext = (data) => {
    console.log(data);
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!');
    }
  };

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/login", { _formValues })
      .then((response) => {
        console.log(_formValues);
      })
      .catch((error) => console.log(error));
    reset(_formValues);
  };
  const handleReset = () => {

    setActiveStep(0);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BookingInfo />;
      case 1:
        return <FlightInfo />;
      case 2:
        return <PassengerInfo />;
      case 3:
        return <ReviewBooking />;
      case 4:
        return <ConfirmBooking />;
      case 5:
        return <Checkout />;
      default:
        return 'unknown step';
    }
  }

  return (
    <Card>
      <CardHeader
        title="Flight Booking Stepper"
        titleTypographyProps={{ variant: 'h1' }}
      />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  className={clsx({ active: activeStep === index })}
                >
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className="step-label">
                      <Typography className="step-number">
                        0{index + 1}
                      </Typography>
                      <div>
                        <Typography className="step-title">
                          {step.title}
                        </Typography>
                        <Typography className="step-subtitle">
                          {step.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                  <FormProvider {...methods}>
                    <StepContent>
                      <form onSubmit={methods.handleSubmit(handleNext)}>
                        {getStepContent(activeStep)}
                        <div>
                          <Button
                            // className={classes.button}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                          >
                            Back
                          </Button>
                          <Button
                            // className={classes.button}
                            variant="contained"
                            color="primary"
                            // onClick={handleNext}
                            type="submit"
                          >
                            {activeStep === steps.length - 1
                              ? 'Submit'
                              : 'Next'}
                          </Button>
                        </div>
                      </form>
                    </StepContent>
                  </FormProvider>
                </Step>
              );
            })}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <Box sx={{ mt: 2 }}>
            <Typography>The booking is complete!</Typography>
            <Button
              size="small"
              sx={{ mt: 2 }}
              variant="contained"
              onClick={handleReset}
            >
              Confirm Booking
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StepperVerticalWithNumbers;
