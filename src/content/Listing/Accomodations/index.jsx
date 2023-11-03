
import React, { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import {
    Container,
    Stepper,
    Step,
    StepLabel,
    Button,
    Snackbar,
    Alert,
} from '@mui/material';

import {
    BasicInfoForm,
    ContactDetailsForm,
    PropertyLocationForm,
    RoomDetailsForm,
    AmenitiesForm,
    PoliciesForm,
    SubmitData
} from './Components';



const initialValues = {
    basicInfo: {
        propertyType: "",
        propertyName: "",
        hotelChain: "",
        description: "",
        starRating: 1,
    },
    contactDetails: {
        additionalContacts: [
            {
                title: "",
                contactName: "",
                phoneNumber: "",
                altPhoneNumber: "",
                email: "",
            }
        ],
        socialAccLink: "",
        ownMultipleHotels: false,
    },
    propertyLocation: {
        countryRegion: "",
        district: "",
        city: "",
        address: "",
        postCode: 1,
    },
    roomDetails: [
        {
            roomType: " ",
            roomName: " ",
            numberOfRooms: 1,
            bedType: " ",
            bedQuantity: 2,
            maxGuests: 2,
            roomSize: 30,
            basePricePerNight: 1000,


        },
    ],
    roomPhotos: [],
    offerLowerRate: true,
    discountAmount: 10, // Percentage
    minOccupancyForDiscount: 4,

    pricing: {
        extraBedOptions: {
            provideExtraBeds: true,
            numberOfExtraBeds: 2,
            accommodateChildrenInExtraBeds: true,
            accommodateAdultsInExtraBeds: false,
        },
    },
    hotelAmenities: ["Free Wi-Fi", "Parking", "24-Hour Front Desk", "Air Conditioning", "Room Service", "Restaurant", "Swimming Pool", "Fitness Center", "Lounge", "Business Center", "Conference/Meeting Rooms", "Laundry Service", "Concierge Service", "Airport Shuttle", "Pet-Friendly", "Non-Smoking Rooms", "Family Rooms", "Kitchenette", "Coffee/Tea Maker", "Cable/Satellite TV", "Safe", "Ironing Facilities", "Hair Dryer", "Bathrobe", "Slippers", "In-Room Jacuzzi", "Balcony/Patio", "Sea View", "Mountain View", "Garden", "Playground", "Shuttle Service", "Hiking Trails", "Bicycle Rental", "Room Safe", "Desk", "Telephone", "Wake-up Service", "Dry Cleaning", "Car Rental", "Free Breakfast", "Express Check-in/Check-out", "Luggage Storage", "Newspapers", "Handicapped Accessibility", "Elevator", "In-Room Dining", "Fireplaces"
    ],
    propertyPhotos: [],
    policies: [],
    checkInTime: "",
    checkOutTime: "",
    cancellations: {
        cancelFreeDays: 7,
        penaltyPercentage: 20,
        protectAgainstAccidentalBookings: true,
    },

};


const yupSchema = Yup.object().shape({
    basicInfo: Yup.object().shape({
        propertyType: Yup.string().required('Property Type is required'),
        propertyName: Yup.string().required('Property Name is required'),
        hotelChain: Yup.string().required('Hotel Chain is required'),
        description: Yup.string(),
        starRating: Yup.number().min(0, 'Minimum rating is 0').max(5, 'Maximum rating is 5'),
    }),
    contactDetails: Yup.object().shape({
        additionalContacts: Yup.array().of(
            Yup.object().shape({
                title: Yup.string(),
                contactName: Yup.string().required('Contact Name is required'),
                phoneNumber: Yup.string().required('Phone Number is required'),
                altPhoneNumber: Yup.string(),
                email: Yup.string().email(),
            })
        ),
        socialAccLink: Yup.string(),
        ownMultipleHotels: Yup.boolean(),
    }),
    propertyLocation: Yup.object().shape({
        countryRegion: Yup.string(),
        district: Yup.string(),
        city: Yup.string(),
        address: Yup.string(),
        postCode: Yup.number().integer(),
    }),
    roomDetails: Yup.array().of(
        Yup.object().shape({
            roomType: Yup.string(),
            roomName: Yup.string(),
            numberOfRooms: Yup.number().integer().min(1, 'Minimum 1 room'),
            bedType: Yup.string(),
            bedQuantity: Yup.number().integer().min(1, 'Minimum 1 bed'),
            maxGuests: Yup.number().integer().min(1, 'Minimum 1 guest'),
            roomSize: Yup.number().integer(),
            basePricePerNight: Yup.number().min(0, 'Price cannot be negative'),
        })
    ),
    roomPhotos: Yup.array(),
    offerLowerRate: Yup.boolean(),
    discountAmount: Yup.number().integer().min(0, 'Discount cannot be negative'),
    minOccupancyForDiscount: Yup.number().integer().min(1, 'Minimum 1 occupancy'),
    pricing: Yup.object().shape({
        extraBedOptions: Yup.object().shape({
            provideExtraBeds: Yup.boolean(),
            numberOfExtraBeds: Yup.number().integer().min(0, 'Minimum 0 extra beds'),
            accommodateChildrenInExtraBeds: Yup.boolean(),
            accommodateAdultsInExtraBeds: Yup.boolean(),
        }),
    }),
    hotelAmenities: Yup.array().of(Yup.string()),
    propertyPhotos: Yup.array(),
    policies: Yup.object().shape({
        checkInTime: Yup.string(),
        checkOutTime: Yup.string(),
        cancellations: Yup.object().shape({
            cancelFreeDays: Yup.number().integer().min(0, 'Minimum 0 days'),
            penaltyPercentage: Yup.number().integer().min(0, 'Minimum 0 percentage'),
            protectAgainstAccidentalBookings: Yup.boolean(),
        }),
    }),
});
function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(1);
    const [isSubmitSuccess, setSubmitSuccess] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: yupSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log('Submitted Values', values);
            setSubmitSuccess(true);
            setOpenSnackbar(true);
        },
    });
    const steps = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => {
        if (isLastStep) {
            formik.submitForm();
            console.log("Form Values ", formik.values)
        } else {
            setActiveStep(activeStep + 1);
            console.log("Form Values ", formik.values)
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
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
                        <BasicInfoForm
                            isLastStep={isLastStep}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 2 && (
                        <ContactDetailsForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 3 && (
                        <PropertyLocationForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 4 && (
                        <RoomDetailsForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 5 && (
                        <AmenitiesForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 6 && (
                        <PoliciesForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 7 && (
                        <SubmitData
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                </Form>
            </FormikProvider>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={isSubmitSuccess ? 'success' : 'error'}
                >
                    {isSubmitSuccess
                        ? 'Form submitted successfully!'
                        : 'Form submission failed.'}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default MultiStepForm;
