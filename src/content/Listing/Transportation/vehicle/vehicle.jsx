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
    VehicleInformationForm,
    VehicleFeaturesForm,
    DocumentationForm,
    PricingForm,
    OwnerInfoForm,
    ImagesForm
} from './component';

const initialValues = {
    vehicleInformation: {
        company: '',
        model: '',
        year: 0,
        fuelType: '',
        transmissionType: '',
        mileage: 0,
    },
    vehicleFeatures: {
        passengers: 0,
        airConditioning: false,
        radio: false,
        mp3Player: false,
        toolkit: false,
        airbag: false,
        additionalAmenities: [],
        newAmenity: '',
    },
    documentation: {
        registrationDetails: {
            registrationNature: '',
            registrationNumber: 0,
            registrationYear: 0
        },
        insuranceDetails: '',
    },
    pricing: {
        rentalRates: {
            booking: 0,
            perPassenger: 0
        },
        securityDeposit: 0,
        discounts: 0,
        cancellationPolicy: '',
    },
    images: {
        exterior: '',
        interior: '',
        additionalImages: [],
    },
    ownerInfo: {
        contactInfo: {
            name:'',
            contact:0,
            address:''
        },
        reviews: [],
    },
    termsAndConditions: '',
};


const yupSchema = yup.object().shape({
    vehicleInformation: yup.object().shape({
        company: yup.string().required('Company is required'),
        model: yup.string().required('Model is required'),
        year: yup.number().integer().required('Year is required'),
        fuelType: yup.string().required('Fuel Type is required'),
        mileage: yup.number().integer().required('Mileage is required'),
    }),
    vehicleFeatures: yup.object().shape({
        seats: yup.number().integer().required('Number of Seats is required'),
        airConditioning: yup.boolean().required('Air Conditioning is required'),
        entertainmentSystem: yup.boolean().required('Entertainment System is required'),
        safetyFeatures: yup.array().of(yup.string()),
        additionalAmenities: yup.array().of(yup.string()),
    }),
    documentation: yup.object().shape({
        registrationDetails: yup.string().required('Registration Details are required'),
        insuranceDetails: yup.string().required('Insurance Details are required'),
    }),
    pricing: yup.object().shape({
        rentalRates: yup.object().required('Rental Rates are required'),
        securityDeposit: yup.number().required('Security Deposit is required'),
        discounts: yup.object(),
        cancellationPolicy: yup.string().required('Cancellation Policy is required'),
    }),
    ownerInfo: yup.object().shape({
        contactInfo: yup.object().required('Owner Contact Information is required'),
        reviews: yup.array().of(yup.object()),
    }),
    termsAndConditions: yup.string().required('Terms and Conditions are required'),
});

function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(1);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: yupSchema,
        onSubmit: (values) => {
            console.log("Form Submitted")
        },

    });

    const steps = ["1", "2", "3", "4", "5", "6"]
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
                        <VehicleInformationForm
                            isLastStep={isLastStep}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 2 && (
                        <VehicleFeaturesForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 3 && (
                        <DocumentationForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 4 && (
                        <PricingForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 5 && (
                        <OwnerInfoForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 6 && (
                        <ImagesForm
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