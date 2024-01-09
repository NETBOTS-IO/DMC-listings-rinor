import React, { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import * as yup from 'yup';
import {
    Container,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';

import {
    DriverInformationForm,
    DriverLicenseForm,
    DriverExperienceForm,
    DriverExpertiseForm,
    DrivingRecordForm,
    BackgroundCheckForm,
    EmergencyContactForm
} from './components';

const initialFormValues = {
    driverInformation: {
        fullName: '',
        contactInformation: {
            phone: '',
            whatsapp: '',
        },
        address: '',
    },
    driverLicense: {
        licenseNumber: '',
        expiryDate: '',
        licenseType: '',
    },
    driverExperience: [
        {
            position: '',
            vehicletype: '',
            company: '',
            route: '',
            startDate: Date(),
            currentlyWorking: false,
            endDate: Date(),
        },
    ],
    driverExperties: [
        {
          vehicletype: '',
          route: '',
          hasCertificate: false, 
          hasFormalTraining: false, 
        },
      ],

    drivingRecord: {
        summary: '',
        accidentsViolations: '',
    },
    backgroundCheck: {
        cleanCriminalRecord: false,
        driverPhoto: '',
    },
    emergencyContact: {
        name: '',
        contactInformation: '',
    },
};



const yupSchema = yup.object().shape({
    driverInformation: yup.object().shape({
        fullName: yup.string().required('Full Name is required'),
        contactInformation: yup.object().shape({
            phone: yup.string().required('Phone is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
        }),
    }),
    driverLicense: yup.object().shape({
        licenseNumber: yup.string().required('License Number is required'),
        expiryDate: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').required('Expiry Date is required'),
        licenseType: yup.string().required('License Type is required'),
    }),
    drivingRecord: yup.object().shape({
        summary: yup.string(),
        accidentsViolations: yup.string(),
    }),
    backgroundCheck: yup.object().shape({
        cleanCriminalRecord: yup.boolean().required('Background check information is required'),
    }),
    emergencyContact: yup.object().shape({
        name: yup.string().required('Emergency Contact Name is required'),
        contactInformation: yup.string().required('Emergency Contact Information is required'),
    }),
});

function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(1);

    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: yupSchema,
        onSubmit: (values) => {
            console.log("Form Submitted")
        },

    });

    const steps = ["1", "2", "3", "4", "5", "6", "7"]
    const isLastStep = activeStep === steps.length;


    const handleNext = async () => {
        if (isLastStep) {
            try {
                const errors = await formik.submitForm();
                console.log("Formik Saved Values", formik.values)
            } catch (error) {
                // Handle any submission errors (e.g., network issues)
                console.error('Form submission error:', error);
            }
        } else {
            setActiveStep(activeStep + 1);
        }
    };


    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    return (
        <Container>
            <FormikProvider value={formik}>
                <Form>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel />
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === 1 && (
                        <DriverInformationForm
                            isLastStep={isLastStep}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 2 && (
                        <DriverLicenseForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 3 && (
                        <DriverExperienceForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 4 && (
                        <DriverExpertiseForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 5 && (
                        <DrivingRecordForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 6 && (
                        <EmergencyContactForm 
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 7 && (
                        <BackgroundCheckForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}

                </Form>
            </FormikProvider>
        </Container>
    );
}

export default MultiStepForm;
