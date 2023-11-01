import React from 'react';
import { useFormikContext, Field, FieldArray } from 'formik';
import {

    Button,
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Select,
    MenuItem,
} from '@mui/material';

function BasicInfoForm({ isLastStep, handleNext }) {
    const formik = useFormikContext();
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Basic Info</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="basicInfo.propertyName"
                        label="Property Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="basicInfo.starRating"
                        label="Star Rating"
                        type="number"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function ContactDetailsForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Contact Details</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        as={TextField}
                        name="contactDetails.contactName"
                        label="Contact Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        as={TextField}
                        name="contactDetails.phoneNumber"
                        label="Phone Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        as={TextField}
                        name="contactDetails.altPhoneNumber"
                        label="Alternative Phone Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="contactDetails.ownMultipleHotels"
                        label="Do you own multiple hotels?"
                        type="checkbox"
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Button onClick={handleBack} variant="contained" color="primary">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function ChannelManagerForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Channel Manager</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="channelManager.channelManagerName"
                        label="Channel Manager's Name"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Button onClick={handleBack} variant="contained" color="primary">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function PropertyLocationForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Property Location</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="propertyLocation.streetAddress"
                        label="Street Address"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="propertyLocation.addressLine2"
                        label="Address Line 2"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="propertyLocation.countryRegion"
                        label="Country/Region"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="propertyLocation.city"
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="propertyLocation.postCode"
                        label="Post Code"
                        type="number"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Button onClick={handleBack} variant="contained" color="primary">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

const roomTypes = [
    'Single',
    'Double',
    'Twin',
    'Triple',
    'Quadruple',
    'Family',
    'Suite',
    'Studio',
    'Apartment',
    'Deluxe',
    'Luxury',
    'Other',
];

const bedTypes = ['Single', 'Double', 'Master Size', 'King Size', 'Bunk Bed', 'Sofa Bed', 'Futon Mat', 'Other'];

function RoomDetailsForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

    const addRoom = () => {
        formik.setValues({
            ...formik.values,
            roomDetails: [
                ...formik.values.roomDetails,
                {
                    roomType: '',
                    roomName: '',
                    numberOfRooms: 0,
                    bedOptions: {
                        bedType: '',
                        numberOfBeds: 0,
                    },
                    maxGuests: 0,
                    roomSize: 0,
                },
            ],
        });
    };

    const addBedToRoom = (index) => {
        console.log("index", index)
        const updatedRoomDetails = [...formik.values.roomDetails];
        updatedRoomDetails[index].bedOptions = {
            bedType: '',
            numberOfBeds: 0,
        };




































        
        formik.setValues({
            ...formik.values,
            roomDetails: updatedRoomDetails,
        });
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Room Details</Typography>
                </Grid>
                <FieldArray
                    name="roomDetails"
                    render={(arrayHelpers) => (
                        formik.values.roomDetails.map((room, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${index}].roomType`}
                                        label="Room Type"
                                        fullWidth
                                        select
                                    >
                                        {roomTypes.map((type, idx) => (
                                            <MenuItem key={idx} value={type}>
                                                {type}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${index}].roomName`}
                                        label="Room Name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${index}].numberOfRooms`}
                                        label="Number of Rooms"
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Bed Options</Typography>
                                </Grid>

                                {room.bedOptions.map((item, i) => {
                                    const bedOption = item;
                                    <Grid container spacing={2} key={i}>
                                        <Grid item xs={12} >
                                            <Field
                                                as={TextField}
                                                name={bedOption.bedType}
                                                label="Bed Type"
                                                fullWidth
                                                select
                                            >
                                                {bedTypes.map((type, idx) => (
                                                    <MenuItem key={idx} value={type}>
                                                        {type}
                                                    </MenuItem>
                                                ))}
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                as={TextField}
                                                name={bedOption.numberOfBeds}
                                                label="Number of Beds"
                                                fullWidth
                                                type="number"
                                            />
                                        </Grid>
                                    </Grid>
                                })}




                                <Grid item xs={12}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => addBedToRoom(index)}
                                    >
                                        Add Bed
                                    </Button>
                                </Grid>
                            </Grid>
                        ))
                    )}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={addRoom}
                >
                    Add Room
                </Button>
            </Grid>
            <Grid container justifyContent="space-between">
                <Button onClick={handleBack} variant="contained" color="primary">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function PricingForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Pricing</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="pricing.basePricePerNight"
                        label="Base Price per Night (PKR)"
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Field
                                as={Checkbox}
                                name="pricing.offerLowerRate"
                                type="checkbox"
                            />
                        }
                        label="Offer a lower rate when there are less than 7 guests?"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="pricing.discountAmount"
                        label="Discount Amount (%)"
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="pricing.minOccupancyForDiscount"
                        label="Minimum Occupancy for a Discount"
                        type="number"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Button onClick={handleBack} variant="contained" color="primary">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function AmenitiesForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }

    const mostRequestedByGuestsOptions = [
        'Air conditioning',
        'Bath',
        'Spa bath',
        'Flat-screen TV',
        'Electric kettle',
        'Balcony',
        'View',
        'Terrace',
    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Amenities</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FieldArray
                        name="amenities.mostRequestedByGuests"
                        render={arrayHelpers => (
                            mostRequestedByGuestsOptions.map((option, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name={`amenities.mostRequestedByGuests[${index}]`}
                                            />
                                        }
                                        label={option}
                                    />
                                </Grid>
                            ))
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Button onClick={handleBack} variant="contained" color="primary">
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function PoliciesForm({ handleNext }) {
    {/* const formik = useFormikContext(); */ }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Policies</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="policies.checkInTime"
                        label="Check-in Time"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="policies.checkOutTime"
                        label="Check-out Time"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="policies.accommodateChildren"
                                type="checkbox"
                            />
                        }
                        label="Accommodate Children"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="policies.allowPets"
                        label="Allow Pets"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="policies.petCharges"
                        label="Pet Charges"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
                <Button onClick={handleNext} variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </>
    );
}



export {
    BasicInfoForm,
    ContactDetailsForm,
    ChannelManagerForm,
    PropertyLocationForm,
    RoomDetailsForm,
    PricingForm,
    AmenitiesForm,
    PoliciesForm,
};
