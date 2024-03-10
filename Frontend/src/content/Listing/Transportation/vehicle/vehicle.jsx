import React, { useState } from 'react';
import axios from 'axios';
import { useFormik, Form, FormikProvider } from 'formik';
import * as yup from 'yup';
import { userData } from '../../../auth/SignIn';
import {
    Container,
    Stepper,
    Step,
    StepLabel,
    Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@mui/material';

import {
    VehicleInformationForm,
    VehicleFeaturesForm,
    DocumentationForm,
    PricingForm,
    OwnerInfoForm,
    Photos
} from './component';
import { useNavigate } from 'react-router-dom';


const BASE_URL = "https://dmc-listings-server-rinor.vercel.app"
// || "http://localhost:8000"


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
        discounts: '0%',
        cancellationPolicy: '',
    },

    ownerInfo: {
        contactInfo: {
            name: '',
            contact: 0,
            address: ''
        },
        reviews: [],
    },
    termsAndConditions: '',
    photos: {
        ownerPhoto: '',
        vehiclePhotos: []
    },
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
        discounts: yup.string(),
        cancellationPolicy: yup.string(),
    }),
    ownerInfo: yup.object().shape({
        contactInfo: yup.object().required('Owner Contact Information is required'),
        reviews: yup.array().of(yup.object()),
    }),
    termsAndConditions: yup.string().required('Terms and Conditions are required'),
});

function Vehicle() {
    const [activeStep, setActiveStep] = useState(0);
    const [isSubmitSuccess, setSubmitSuccess] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const Navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: yupSchema,
        onSubmit: (values) => {
            console.log("Form Submitted")
        },

    });

    const handlePopupClose = () => {
        setPopupOpen(false);
        isSubmitSuccess ? Navigate('/listing/') : setActiveStep(0);
    };

    const steps = ["1", "2", "3", "4", "5", "6"]
    const isLastStep = activeStep === steps.length - 1;


    const handleNext = async () => {
        if (isLastStep) {
            try {
                const errors = await formik.submitForm();
                console.log("Formik Saved Values", formik.values)
                if (!errors) {
                    await axios.post(
                        `${BASE_URL}/api/vehicle/vehicles`,
                        {
                            ...formik.values,
                            user: {
                                name: userData.name,
                                designation: userData.designation
                            }
                        },
                        {
                            withCredentials: true,
                            header:
                                { "Access-Control-Allow-Origin": true }
                        }
                    )
                        .then((response) => {
                            if (response.status === 200 || 201) {
                                console.log("vehicle Added in the DB", response.data)
                                setSubmitSuccess(true);
                            } else {
                                console.log("Failed to Add in the DB", response.status)
                                setSubmitSuccess(false);
                            }
                        }).catch((error) => {
                            console.error('Error posting data to the backend:', error);
                            setSubmitSuccess(false);
                        }).finally(() => {
                            setPopupOpen(true);
                        });
                }
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
                    {activeStep === 0 && (
                        <VehicleInformationForm
                            isLastStep={isLastStep}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 1 && (
                        <VehicleFeaturesForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 2 && (
                        <DocumentationForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 3 && (
                        <PricingForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 4 && (
                        <OwnerInfoForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 5 && (
                        <Photos
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}

                </Form>
            </FormikProvider>

            <Dialog open={isPopupOpen} onClose={handlePopupClose}>
                <DialogTitle style={{ textAlign: 'center' }}>
                    {isSubmitSuccess
                        ? 'Form submitted successfully!'
                        : 'Form submission failed.'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ textAlign: 'center' }}>
                        {isSubmitSuccess
                            ? 'Your form has been submitted successfully!'
                            : 'There was an error submitting the form. Please try again later.'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePopupClose} color="primary" variant="contained">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </Container>
    );
}

export default Vehicle;