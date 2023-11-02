import React, { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import {
    Container,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';

import {
    BasicInfoForm,
    ContactDetailsForm,
    PropertyLocationForm,
    RoomDetailsForm,
    AmenitiesForm,
    PoliciesForm,
} from "./Components"

const initialValues = {
    basicInfo: {
        propertyType: "",
        propertyName: "",
        starRating: 0,
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
        postCode: 0,
    },
    roomDetails: [
        {
            roomType: "",
            roomName: "",
            numberOfRooms: 10,
            bedType: "",
            bedQuantity: 2,
            maxGuests: 2,
            roomSize: 30,

            basePricePerNight: 1000,
            offerLowerRate: true,
            discountAmount: 10, // Percentage
            minOccupancyForDiscount: 4,
            roomPhoto: [],
        },
    ],
    pricing: {
        basePricePerNight: 1000,
        offerLowerRate: true,
        discountAmount: 10,
        minOccupancyForDiscount: 7,
        extraBedOptions: {
            provideExtraBeds: true,
            numberOfExtraBeds: 2,
            accommodateChildrenInExtraBeds: true,
            accommodateAdultsInExtraBeds: false,
        },
    },
    amenities: {
        instructional: "",
        mostRequestedByGuests: [],
    },
    propertyPhotos: [],
    policies: {
        cancellations: {
            cancelFreeDays: 7,
            penaltyPercentage: 20,
            protectAgainstAccidentalBookings: true,
        },
        checkInTime: "",
        checkOutTime: "",
        accommodateChildren: true,
        allowPets: "",
        petCharges: "",
    }
};


const yupSchema = Yup.object().shape({
    basicInfo: Yup.object().shape({
        propertyName: Yup.string().required('Property Name is required'),
        starRating: Yup.number().min(1, 'Minimum rating is 1').max(5, 'Maximum rating is 5'),
    }),
    contactDetails: Yup.object().shape({
        contactName: Yup.string().required('Contact Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        altPhoneNumber: Yup.string(),
        ownMultipleHotels: Yup.boolean(),
    }),
    channelManager: Yup.object().shape({
        useChannelManager: Yup.boolean(),
        channelManagerName: Yup.string(),
    }),
    propertyLocation: Yup.object().shape({
        streetAddress: Yup.string().required('Street Address is required'),
        addressLine2: Yup.string(),
        countryRegion: Yup.string().required('Country/Region is required'),
        city: Yup.string().required('City is required'),
        postCode: Yup.number().integer(),
    }),
    roomDetails: Yup.array().of(
        Yup.object().shape({
            roomType: Yup.string().required('Room Type is required'),
            roomName: Yup.string().required('Room Name is required'),
            numberOfRooms: Yup.number().integer().min(1, 'Minimum 1 room'),
            bedOptions: Yup.object().shape({
                bedType: Yup.string().required('Bed Type is required'),
                bedQuantity: Yup.number().integer().min(1, 'Minimum 1 bed'),
            }),
            maxGuests: Yup.number().integer().min(1, 'Minimum 1 guest'),
            roomSize: Yup.number().integer(),
        })
    ),
    pricing: Yup.object().shape({
        basePricePerNight: Yup.number().min(0, 'Price cannot be negative').required('Base Price is required'),
        offerLowerRate: Yup.boolean(),
        discountAmount: Yup.number().integer().min(0, 'Discount cannot be negative'),
        minOccupancyForDiscount: Yup.number().integer().min(1, 'Minimum 1 occupancy'),
        extraBedOptions: Yup.object().shape({
            provideExtraBeds: Yup.boolean(),
            numberOfExtraBeds: Yup.number().integer().min(0, 'Minimum 0 extra beds'),
            accommodateChildrenInExtraBeds: Yup.boolean(),
            accommodateAdultsInExtraBeds: Yup.boolean(),
        }),
    }),
    amenities: Yup.object().shape({
        instructional: Yup.string(),
        mostRequestedByGuests: Yup.array(),
    }),
    propertyPhotos: Yup.array(),
    policies: Yup.object().shape({
        cancellations: Yup.object().shape({
            cancelFreeDays: Yup.number().integer().min(0, 'Minimum 0 days'),
            penaltyPercentage: Yup.number().integer().min(0, 'Minimum 0 percentage'),
            protectAgainstAccidentalBookings: Yup.boolean(),
        }),
        checkInTime: Yup.string(),
        checkOutTime: Yup.string(),
        accommodateChildren: Yup.boolean(),
        allowPets: Yup.string(),
        petCharges: Yup.string(),
    }),
});

const steps = ['1', '2', '3', '4', '5', '6', '7'];

function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(1);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: yupSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log("Submitted Values", values);
        },
    });

    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => {
        if (isLastStep) {
            formik.submitForm();
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
                </Form>
            </FormikProvider>
        </Container>
    );
}




export default MultiStepForm;
