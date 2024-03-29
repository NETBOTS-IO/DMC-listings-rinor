
import React, { useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { userData } from '../../auth/SignIn';
import {
    Container,
    Stepper,
    Step,
    StepLabel,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';

import {
    BasicInfoForm,
    ContactDetailsForm,
    PropertyLocationForm,
    RoomDetailsForm,
    AmenitiesForm,
    PoliciesForm,
    Photos,
    SubmitData
} from './Components';
import { useNavigate } from 'react-router-dom';

const BASE_URL =
    "https://dmc-listings-rinor.onrender.com"
//  "https://dmc-listings-server-rinor.vercel.app"
// "http://localhost:8000"


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
    propertyLocation: [
        {
            countryRegion: "",
            district: "",
            city: "",
            address: "",
            postCode: 1,
        }
    ],
    roomDetails: [
        {
            roomType: " ",
            roomQty: 1,
            details: [
                {
                    roomName: " ",
                    bedDetails: [
                        {
                            bedType: " ",
                            bedQuantity: 2,
                        }
                    ],
                    maxGuests: 2,
                    basePricePerNight: 1000,
                    extraCharges: 0,
                }

            ],

            offerLowerRate: true,
            discountAmount: 10, // Percentage
            minOccupancyForDiscount: 4,

        },
    ],

    pricing: {
        extraBedOptions: {
            provideExtraBeds: true,
            numberOfExtraBeds: 2,
            accommodateChildrenInExtraBeds: true,
            accommodateAdultsInExtraBeds: false,
        },
    },
    hotelAmenities: [],
    roomPhotos: [
        {
            roomNames: [],
            photo: ""

        },
    ],
    propertyPhotos: {

        externalPhotos: [],
        internalPhotos: [],
    },
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
        propertyType: Yup.string(),
        propertyName: Yup.string(),
        hotelChain: Yup.string(),
        description: Yup.string(),
        starRating: Yup.number(),
    }),
    contactDetails: Yup.object().shape({
        additionalContacts: Yup.array().of(
            Yup.object().shape({
                title: Yup.string(),
                contactName: Yup.string(),
                phoneNumber: Yup.string(),
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


    // Rest of your component...

    const handlePopupClose = () => {
        setPopupOpen(false);
        isSubmitSuccess ? Navigate('/listing/') : setActiveStep(0);
    };

    const steps = ["1", "2", "3", "4", "5", "6", "7"]
    const isLastStep = activeStep === steps.length - 1;
    const handleNext = async () => {
        if (isLastStep) {
            try {
                const errors = await formik.submitForm();
                console.log("Formik Saved Values", formik.values)
                if (!errors) {


                    // const formData = new FormData();
                    // formData.append('basicInfo', formik.values.basicInfo);
                    // formData.append('contactDetails', formik.values.contactDetails);
                    // formData.append('propertyLocation', formik.values.propertyLocation);
                    // formData.append('roomDetails', formik.values.roomDetails);
                    // formData.append('pricing', formik.values.pricing);
                    // formData.append('cancellations', formik.values.cancellations);
                    // formData.append('hotelAmenities', formik.values.hotelAmenities);
                    // formData.append('policies', formik.values.policies);
                    // formData.append('checkInTime', formik.values.checkInTime);
                    // formData.append('checkOutTime', formik.values.checkOutTime);
                    // formData.append('roomPhotos', formik.values.roomPhotos);
                    // formData.append('propertyPhotos', formik.values.propertyPhotos);
                    // console.log("formData ", formik.values)

                    // Example usage:

                    // const token = document.cookie
                    //     .split('; ')
                    //     .find(row => row.startsWith('access_token='))
                    //     ?.split('=')[1];
                    // console.log("token", token)


                    try {

                        const response = await axios.post(
                            `${BASE_URL}/api/property/properties`,
                            {
                                ...formik.values,
                                user: {
                                    name: userData.name,
                                    designation: userData.designation
                                }
                            },
                            {

                                headers: {
                                    'Authorization': userData.token, // Include token in the Authorization header
                                    //     'Content-Type': 'application/json' // Adjust content type as needed
                                },
                                withCredentials: true,
                            }
                        );

                        if (response.status === 200 || response.status === 201) {
                            console.log("Property Added in the DB", response.data);
                            setSubmitSuccess(true);
                        } else {
                            console.log("Failed to Add in the DB");
                            setSubmitSuccess(false);
                        }
                    } catch (error) {
                        console.error('Error posting data to the backend:', error);
                        setSubmitSuccess(false);
                    } finally {
                        setPopupOpen(true);
                    }
                } else {
                    // Form submission has errors, you can handle them as needed
                    console.log('Form has validation errors:', errors);
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
                        <BasicInfoForm
                            isLastStep={isLastStep}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 1 && (
                        <ContactDetailsForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 2 && (
                        <PropertyLocationForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 3 && (
                        <RoomDetailsForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 4 && (
                        <AmenitiesForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 5 && (
                        <PoliciesForm
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 6 && (
                        <Photos
                            isLastStep={isLastStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 7 && (
                        <SubmitData />
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

export default MultiStepForm;
