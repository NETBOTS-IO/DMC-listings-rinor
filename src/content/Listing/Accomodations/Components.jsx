import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
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
    FormLabel,
    Rating,
    FormControl,
    InputLabel,
    TextareaAutosize
} from '@mui/material';

const propertyTypes = [
    { label: 'Hotel', value: 'Hotel' },
    { label: 'Motel', value: 'Motel' },
    { label: 'Resort', value: 'Resort' },
    { label: 'Guest House', value: 'Guest House' },
    { label: 'Boutique Hotel', value: 'Boutique Hotel' },
    { label: 'All-Inclusive Resort', value: 'All-Inclusive Resort' },
    { label: 'Lodge', value: 'Lodge' },
    { label: 'Homestay', value: 'Homestay' },
    { label: 'Hostel', value: 'Hostel' },
];

function BasicInfoForm({ isLastStep, handleNext }) {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Basic Info</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                        <InputLabel id="property-type-label">Select Type</InputLabel>
                        <Select
                            labelId="property-type-label"
                            name="basicInfo.propertyType"
                            label="Select Type"
                            fullWidth
                        >
                            {propertyTypes.map((type) => (
                                <MenuItem key={type.value} value={type.value}>
                                    {type.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel sx={{ color: 'black', fontSize: 28 }}>What is the name of your property?</FormLabel>
                    <Field
                        as={TextField}
                        name="basicInfo.propertyName"
                        fullWidth
                        sx={{ mt: 2, mb: 2 }}
                    />
                    <Typography variant='p'>
                        This name will be seen by guests when they search for place to stay.
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
                    <FormLabel sx={{ color: 'black', fontSize: 18, mr: 2 }}>Star Rating:</FormLabel>
                    <Field
                        name="basicInfo.starRating"
                        render={({ field }) => (
                            <Rating
                                {...field}
                                name="basicInfo.starRating"
                                precision={0.5}
                                size='large'
                            />
                        )}
                    />
                </Grid>
            </Grid >
            <Grid container justifyContent="flex-end">
                <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "30%", float: "right" }}

                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

const titles = ["Owner", "Manager", "Other"];

function ContactDetailsForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Contact Details</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FieldArray
                        name="contactDetails.additionalContacts"
                        render={arrayHelpers => (
                            <div>
                                {formik.values.contactDetails.additionalContacts.map((contact, index) => (
                                    <div key={index}>
                                        <Grid container sx={{ mb: 2, mt: 2 }} spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                                                    <InputLabel id="property-type-label">Select Type</InputLabel>
                                                    <Select

                                                        labelId="property-type-label"
                                                        name={`contactDetails.additionalContacts.${index}.title`} label="Select Type"
                                                        fullWidth
                                                    >
                                                        {titles.map((title) => (
                                                            <MenuItem key={title} value={title}>
                                                                {title}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <Field
                                                    style={{ paddingTop: "18px" }}
                                                    as={TextField}
                                                    name={`contactDetails.additionalContacts.${index}.contactName`}
                                                    label="Contact Name"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    as={TextField}
                                                    name={`contactDetails.additionalContacts.${index}.phoneNumber`}
                                                    label="Phone Number"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}  >
                                                <Field
                                                    as={TextField}
                                                    name={`contactDetails.additionalContacts.${index}.altPhoneNumber`}
                                                    label="Alternative Phone Number"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <Field
                                                    as={TextField}
                                                    name={`contactDetails.additionalContacts.${index}.email`}
                                                    label="Email"
                                                    fullWidth
                                                />
                                            </Grid>
                                        </Grid>
                                        {index > 0 && (
                                            <Button

                                                variant="contained"
                                                color="error"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >
                                                Remove
                                            </Button>
                                        )}
                                    </div>
                                ))}
                                <Grid container justifyContent='flex-end'>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => arrayHelpers.push({
                                            title: '',
                                            contactName: '',
                                            phoneNumber: '',
                                            altPhoneNumber: '',
                                            email: '',
                                        })}
                                    >
                                        Add Another
                                    </Button>
                                </Grid>
                            </div>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={8} >
                    <Field
                        as={TextField}
                        name="contactDetails.socialAccLink"
                        label="Social Account Link"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                    <Field
                        as={Checkbox}
                        name="contactDetails.ownMultipleHotels"
                    />
                    <FormLabel>Do you own multiple hotels?</FormLabel>
                </Grid>
            </Grid>
            <Grid
                justifyContent="space-between"

            >
                <Button
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", float: "left" }}
                >
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "30%", float: "right" }}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

const districts = ["Ghanche", "Shigar", "Skardu", "Kharmang", "Astore", "Gilgit", "Diamir", "Ghizer", "Hunza", "Nagar"];


function PropertyLocationForm({ isLastStep, handleBack, handleNext }) {

    // formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Property Location</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                        <InputLabel id="district">Select District</InputLabel>
                        <Select
                            labelId="district"
                            name="propertyLocation.district"
                            label="Select District"

                        >
                            {districts.map((district) => (
                                <MenuItem key={district} value={district}>
                                    {district}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Field
                        style={{ marginTop: "18px" }}
                        as={TextField}
                        name="propertyLocation.city"
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        multiline
                        minRows={1}
                        name="propertyLocation.address"
                        label="Address"
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
                <Button
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", float: "left" }}
                >
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "30%", float: "right" }}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

const roomTypes = ['Single', 'Double', 'Twin', 'Triple', 'Quadruple', 'Family', 'Suite', 'Studio', 'Apartment', 'Deluxe', 'Luxury', 'Other'];
const bedTypes = ['Single', 'Double', 'Master Size', 'King Size', 'Bunk Bed', 'Sofa Bed', 'Futon Mat', 'Other'];

function RoomDetailsForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();
    const [lastIndex, setLastIndex] = useState(0)

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography 
                        style={{ fontSize: "35px", fontFamily: "Inter", fontWeight:"700", marginBottom:"18px" }}
                    variant="h1"
                    >Room Details</Typography>
                </Grid>
                <FieldArray
                    name="roomDetails"
                    render={(arrayHelpers) => (
                        formik.values.roomDetails.map((room, roomIndex) => (
                            <Grid container spacing={2} key={roomIndex}>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].roomType`}
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
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].roomName`}
                                        label="Room Name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].numberOfRooms`}
                                        label="Number of Rooms"
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].bedType`}
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
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].bedQuantity`}
                                        label="Bed Quantity"
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].maxGuests`}
                                        label="Max Guests"
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].roomSize`}
                                        label="Room Size (sqft)"
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].basePricePerNight`}
                                        label="Base Price per Night"
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Field
                                                as={Checkbox}
                                                name={`roomDetails[${roomIndex}].offerLowerRate`}
                                                type="checkbox"
                                            />
                                        }
                                        label="Offer a lower rate when there are less than 7 guests?"
                                    />
                                </Grid>

                                {room.offerLowerRate && (
                                    <>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                as={TextField}
                                                name={`roomDetails[${roomIndex}].discountAmount`}
                                                label="Discount Amount (%)"
                                                fullWidth
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                as={TextField}
                                                name={`roomDetails[${roomIndex}].minOccupancyForDiscount`}
                                                label="Min Occupancy for Discount"
                                                fullWidth
                                                type="number"
                                            />
                                        </Grid>
                                    </>
                                )}

                                {roomIndex > 0 && (
                                    <Grid item xs={12}>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => arrayHelpers.remove(roomIndex)}
                                        >
                                            Remove Room
                                        </Button>
                                    </Grid>
                                )}
                                <Grid container justifyContent={'flex-end'}>
                                    {lastIndex == room.index || lastIndex == 0 && (
                                        < Button
                                            sx={{ mt: 2 }}
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                arrayHelpers.push({
                                                    roomType: '',
                                                    roomName: '',
                                                    numberOfRooms: 0,
                                                    bedType: '',
                                                    bedQuantity: 0,
                                                    maxGuests: 0,
                                                    roomSize: 0,
                                                    offerLowerRate: true,
                                                    discountAmount: 0,
                                                    minOccupancyForDiscount: 0,
                                                    roomPhoto: [],

                                                });
                                                setLastIndex(roomIndex)
                                            }}>
                                            Add Room
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        ))
                    )}
                />

            </Grid >
            <Grid item xs={12}>
                <DropzoneArea
                    style={{ margin: "10px" }}
                    acceptedFiles={['image/*']}
                    filesLimit={3}
                    dropzoneText="Drag and drop an image here or click"
                    onChange={(files) => formik.setFieldValue(`roomPhotos`, files)}
                />
            </Grid>
            <Grid
                justifyContent="space-between"

            >
                <Button
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", float: "left" }}
                >
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "30%", float: "right" }}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function AmenitiesForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }

    const mostRequestedByGuestsOptions = [
        "Free Wi-Fi", "Parking", "24-Hour Front Desk", "Air Conditioning", "Room Service", "Restaurant", "Swimming Pool", "Fitness Center", , "Lounge", "Business Center", "Conference/Meeting Rooms", "Laundry Service", "Concierge Service", "Airport Shuttle", "Pet-Friendly", "Non-Smoking Rooms", "Family Rooms", "Kitchenette", , "Coffee/Tea Maker", "Cable/Satellite TV", "Safe", "Ironing Facilities", "Hair Dryer", "Bathrobe", "Slippers", "In-Room Jacuzzi", "Balcony/Patio", "Sea View", "Mountain View", "Garden", "Playground", "Shuttle Service", "Hiking Trails", "Bicycle Rental", "Room Safe", "Desk", "Telephone", "Wake-up Service", "Dry Cleaning", "Car Rental", "Free Breakfast", "Express Check-in/Check-out", "Luggage Storage", "Newspapers", "Handicapped Accessibility", "Elevator", "In-Room Dining", "Fireplaces"
    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1">Amenities</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {mostRequestedByGuestsOptions.map((option, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name={`amenities.mostRequestedByGuests[${index}]`}
                                        />
                                    }
                                    label={option}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
            <Grid
                justifyContent="space-between"

            >
                <Button
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", float: "left" }}
                >
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "30%", float: "right" }}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}

function PoliciesForm({ isLastStep, handleBack, handleNext }) {
    {/* const formik = useFormikContext(); */ }
    const policies = [
        "No smoking in rooms", "Pets are not allowed", "Accommodate Children", "Allow Pets", , "Cancellation Policy", "Minimum check-in age is 18", "Extra beds available with surcharge", "Alcohol Policy", "Additional Guests Allowed", "Identification Required", "Credit Card or Cash Deposit Required", "Photo ID at Check-in", "No Rollaway/Extra Beds", "No Cribs (Infant Beds)", "No Parking"
    ]
    const timeOptions = [
        "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM",
        "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM",
        "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
        "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
        "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM",
    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1">Policies</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {policies.map((option, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name={`policies[${index}]`}
                                        />
                                    }
                                    label={option}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                        <InputLabel id="check-in-time">Check-in Time</InputLabel>
                        <Field
                            as={Select}
                            name="policies.checkInTime"
                            label="Check-in Time"
                            fullWidth
                        >
                            {timeOptions.map((time, index) => (
                                <MenuItem key={index} value={time}>
                                    {time}
                                </MenuItem>
                            ))}
                        </Field>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                        <InputLabel id="check-out-time">Check-out Time</InputLabel>
                        <Field
                            as={Select}
                            name="policies.checkOutTime"
                            label="Check-out Time"
                            fullWidth
                        >
                            {timeOptions.map((time, index) => (
                                <MenuItem key={index} value={time}>
                                    {time}
                                </MenuItem>
                            ))}
                        </Field>
                    </FormControl>
                </Grid>


            </Grid>
            <Grid
                justifyContent="space-between"

            >
                <Button
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", float: "left" }}
                >
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px", width: "30%", float: "right" }}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </>
    );
}



export {
    BasicInfoForm,
    ContactDetailsForm,
    PropertyLocationForm,
    RoomDetailsForm,
    AmenitiesForm,
    PoliciesForm,
};
