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
                    <Typography variant="h6">Basic Info</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel sx={{ color: 'black', fontSize: 28 }}>What is the type of your property?</FormLabel>
                    <Field
                        as={Select}
                        name="basicInfo.propertyType"
                        // label="Property Type"
                        defaultValue="Select type"
                        fullWidth
                        sx={{ mt: 2, mb: 2 }}
                    >
                        {propertyTypes.map((type) => (
                            <MenuItem key={type.value} value={type.value} >
                                {type.label}
                            </MenuItem>
                        ))}
                    </Field>
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
                <Button onClick={handleNext} variant="contained" color="primary">
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
                    <Typography variant="h6">Contact Details</Typography>
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
                                                <Field
                                                    as={Select}
                                                    name={`contactDetails.additionalContacts.${index}.title`}
                                                    label="Title"
                                                    fullWidth
                                                >
                                                    {titles.map((title) => (
                                                        <MenuItem key={title} value={title}>
                                                            {title}
                                                        </MenuItem>
                                                    ))}
                                                </Field>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <Field
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

const districts = ["Ghanche", "Shigar", "Skardu", "Kharmang", "Astore", "Gilgit", "Diamir", "Ghizer", "Hunza", "Nagar"];

function PropertyLocationForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h6">Property Location</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={Select}
                        name="propertyLocation.district"
                        label=""
                        defaultValue={"Select District"}
                        fullWidth
                    >
                        {districts.map((district) => (
                            <MenuItem key={district} value={district}>
                                {district}
                            </MenuItem>
                        ))}
                    </Field>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        sx={{}}
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
const roomTypes = ['Single', 'Double', 'Twin', 'Triple', 'Quadruple', 'Family', 'Suite', 'Studio', 'Apartment', 'Deluxe', 'Luxury', 'Other'];
const bedTypes = ['Single', 'Double', 'Master Size', 'King Size', 'Bunk Bed', 'Sofa Bed', 'Futon Mat', 'Other'];

function RoomDetailsForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();
<<<<<<< HEAD

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
=======
    const [lastIndex, setLastIndex] = useState(0)
>>>>>>> a7fccff99ead5c997d435581fafbf54ab0571681

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h6">Room Details</Typography>
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
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].offerLowerRate`}
                                        label="Offer Lower Rate"
                                        fullWidth
                                        type="checkbox"
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
                                <Grid item xs={12}>
                                    <DropzoneArea
                                        acceptedFiles={['image/*']}
                                        filesLimit={3}
                                        dropzoneText="Drag and drop an image here or click"
                                        onChange={(files) => formik.setFieldValue(`roomDetails[${roomIndex}].roomPhoto`, files)}
                                    />
                                </Grid>
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
                                    {lastIndex == room.index || lastIndex==0 && (
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
                                <Grid item xs={12} key={index}>
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
    PropertyLocationForm,
    RoomDetailsForm,
    PricingForm,
    AmenitiesForm,
    PoliciesForm,
};
