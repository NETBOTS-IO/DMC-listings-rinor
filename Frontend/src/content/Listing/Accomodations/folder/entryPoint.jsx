
// PropertyForm.js
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropertyDetails from './PropertyDetails';
import ContactInformation from './ContactInformation';
import RoomsAndSuites from './RoomsAndSuites';
import Policies from './Policies';
import Photos from './Photos';
import SubmitButton from './SubmitData';
import { propertyDetailsSchema, contactInformationSchema, roomsAndSuitesSchema, policiesSchema, photosSchema } from "./validationSchema";
import initialValues from "./initialValues"
import Button from '@mui/material/Button';

const PropertyForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 5; // Update this with the total number of steps
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);



    const validationSchema = Yup.object().shape({
        propertyDetails: propertyDetailsSchema,
        contactInformation: contactInformationSchema,
        roomsAndSuites: roomsAndSuitesSchema,
        policies: policiesSchema,
        photos: photosSchema,
    });

    const currentValidationSchema = validationSchema[step - 1];

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={currentValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                if (step < totalSteps) {
                    nextStep();
                    setSubmitting(false); // Allow the next step to be displayed
                } else {
                    // Handle final form submission here
                    console.log(values);
                }
            }}
        >
            <Form>
                {step === 1 && <PropertyDetails />}
                {step === 2 && <ContactInformation />}
                {step === 3 && <RoomsAndSuites />}
                {step === 4 && <Policies />}
                {step === 5 && <Photos />}

                <div>
                    {step > 1 && (
                        <div style={{ margin: '10px', float: 'left'  }}>
                            <Button variant="contained" color="primary" onClick={prevStep}>
                                Previous
                            </Button>
                        </div>
                    )}
                    {step < totalSteps && (
                        <div style={{ margin: '10px', float: 'right' }}>
                            <Button variant="contained" color="primary" onClick={nextStep}>
                                Next
                            </Button>
                        </div>
                    )}
                    {step === totalSteps && (
                        <SubmitButton />
                    )}
                </div>

            </Form>
        </Formik>
    );
};

export default PropertyForm;
