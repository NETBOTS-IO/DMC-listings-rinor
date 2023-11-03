import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useFormikContext, Field, FieldArray } from 'formik';
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    InputLabel,
    Select,
    Checkbox,
    MenuItem,
    FormLabel,
    Rating,
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

// BasicInfoForm component
function BasicInfoForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Basic Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                        <InputLabel id="basicInfo.propertyType">Select Type</InputLabel>
                        <Select
                            labelId="basicInfo.propertyType"
                            name="basicInfo.propertyType"
                            label="Select Type"
                            onChange={(e) => formik.setFieldValue("basicInfo.propertyType", e.target.value)}

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
                <Grid item xs={12} sm={6}>
                    <Field
                        as={TextField}
                        name="basicInfo.propertyName"
                        label="Property Name"
                        fullWidth
                        error={formik.touched.basicInfo?.propertyName && Boolean(formik.errors.basicInfo?.propertyName)}
                        helpertext={formik.touched.basicInfo?.propertyName && formik.errors.basicInfo?.propertyName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        as={TextField}
                        name="basicInfo.hotelChain"
                        label="Hotel Chain (if applicable)"
                        fullWidth
                        error={formik.touched.basicInfo?.hotelChain && Boolean(formik.errors.basicInfo?.hotelChain)}
                        helpertext={formik.touched.basicInfo?.hotelChain && formik.errors.basicInfo?.hotelChain}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        multiline
                        minRows={3}
                        name="basicInfo.description"
                        label="Brief Description"
                        fullWidth
                        error={formik.touched.basicInfo?.description && Boolean(formik.errors.basicInfo?.description)}
                        helpertext={formik.touched.basicInfo?.description && formik.errors.basicInfo?.description}
                    />
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

// ContactDetailsForm component
const titles = ["Owner", "Manager", "Other"];

function ContactDetailsForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

    return (
        <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12}>
                <Typography variant="h1">Contact Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <FieldArray
                    name="contactDetails.additionalContacts"
                    render={(arrayHelpers) => (
                        <div>
                            {formik.values.contactDetails.additionalContacts.map((contact, index) => (
                                <div key={index}>
                                    <Grid container sx={{ mb: 2, mt: 2 }} spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                                                <InputLabel id={`contact-title-label-${index}`}>Select Type</InputLabel>
                                                <Select
                                                    labelId={`contact-title-label-${index}`}
                                                    name={`contactDetails.additionalContacts.${index}.title`}
                                                    label="Select Type"
                                                    onChange={(e) => formik.setFieldValue(`contactDetails.additionalContacts.${index}.title`, e.target.value)}

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
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                as={TextField}
                                                name={`contactDetails.additionalContacts.${index}.contactName`}
                                                label="Contact Name"
                                                fullWidth
                                                error={formik.touched.contactDetails?.additionalContacts?.[index]?.contactName && Boolean(formik.errors.contactDetails?.additionalContacts?.[index]?.contactName)}
                                                helpertext={formik.touched.contactDetails?.additionalContacts?.[index]?.contactName && formik.errors.contactDetails?.additionalContacts?.[index]?.contactName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                as={TextField}
                                                name={`contactDetails.additionalContacts.${index}.phoneNumber`}
                                                label="Phone Number"
                                                fullWidth
                                                error={formik.touched.contactDetails?.additionalContacts?.[index]?.phoneNumber && Boolean(formik.errors.contactDetails?.additionalContacts?.[index]?.phoneNumber)}
                                                helpertext={formik.touched.contactDetails?.additionalContacts?.[index]?.phoneNumber && formik.errors.contactDetails?.additionalContacts?.[index]?.phoneNumber}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                as={TextField}
                                                name={`contactDetails.additionalContacts.${index}.altPhoneNumber`}
                                                label="Alternative Phone Number"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                as={TextField}
                                                name={`contactDetails.additionalContacts.${index}.email`}
                                                label="Email"
                                                fullWidth
                                                error={formik.touched.contactDetails?.additionalContacts?.[index]?.email && Boolean(formik.errors.contactDetails?.additionalContacts?.[index]?.email)}
                                                helpertext={formik.touched.contactDetails?.additionalContacts?.[index]?.email && formik.errors.contactDetails?.additionalContacts?.[index]?.email}
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
            <Grid item xs={12} sm={8} md={8}>
                <Field
                    as={TextField}
                    name="contactDetails.socialAccLink"
                    label="Social Account Link"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Field
                    as={Checkbox}
                    name="contactDetails.ownMultipleHotels"
                />
                <FormLabel>Do you own multiple hotels?</FormLabel>
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
        </Grid>
    );
}

const districts = ["Ghanche", "Shigar", "Skardu", "Kharmang", "Astore", "Gilgit", "Diamir", "Ghizer", "Hunza", "Nagar"];
function PropertyLocationForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

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
                            onChange={(e) => formik.setFieldValue("propertyLocation.district", e.target.value)}

                            error={formik.touched.propertyLocation?.district && Boolean(formik.errors.propertyLocation?.district)}
                            helpertext={formik.touched.propertyLocation?.district && formik.errors.propertyLocation?.district}
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
                        error={formik.touched.propertyLocation?.city && Boolean(formik.errors.propertyLocation?.city)}
                        helpertext={formik.touched.propertyLocation?.city && formik.errors.propertyLocation?.city}
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
                        error={formik.touched.propertyLocation?.address && Boolean(formik.errors.propertyLocation?.address)}
                        helpertext={formik.touched.propertyLocation?.address && formik.errors.propertyLocation?.address}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        name="propertyLocation.postCode"
                        label="Post Code"
                        type="number"
                        fullWidth
                        error={formik.touched.propertyLocation?.postCode && Boolean(formik.errors.propertyLocation?.postCode)}
                        helpertext={formik.touched.propertyLocation?.postCode && formik.errors.propertyLocation?.postCode}
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
    const [lastIndex, setLastIndex] = useState(0);

    const offerLowerRate = formik.values.offerLowerRate;

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography
                        style={{ fontSize: "35px", fontFamily: "Inter", fontWeight: "700", marginBottom: "18px" }}
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
                                        error={formik.touched.roomDetails?.[roomIndex]?.roomType && Boolean(formik.errors.roomDetails?.[roomIndex]?.roomType)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.roomType && formik.errors.roomDetails?.[roomIndex]?.roomType}
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
                                        error={formik.touched.roomDetails?.[roomIndex]?.roomName && Boolean(formik.errors.roomDetails?.[roomIndex]?.roomName)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.roomName && formik.errors.roomDetails?.[roomIndex]?.roomName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].numberOfRooms`}
                                        label="Number of Rooms"
                                        fullWidth
                                        type="number"
                                        error={formik.touched.roomDetails?.[roomIndex]?.numberOfRooms && Boolean(formik.errors.roomDetails?.[roomIndex]?.numberOfRooms)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.numberOfRooms && formik.errors.roomDetails?.[roomIndex]?.numberOfRooms}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].bedType`}
                                        label="Bed Type"
                                        fullWidth
                                        select
                                        error={formik.touched.roomDetails?.[roomIndex]?.bedType && Boolean(formik.errors.roomDetails?.[roomIndex]?.bedType)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.bedType && formik.errors.roomDetails?.[roomIndex]?.bedType}
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
                                        error={formik.touched.roomDetails?.[roomIndex]?.bedQuantity && Boolean(formik.errors.roomDetails?.[roomIndex]?.bedQuantity)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.bedQuantity && formik.errors.roomDetails?.[roomIndex]?.bedQuantity}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].maxGuests`}
                                        label="Max Guests"
                                        fullWidth
                                        type="number"
                                        error={formik.touched.roomDetails?.[roomIndex]?.maxGuests && Boolean(formik.errors.roomDetails?.[roomIndex]?.maxGuests)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.maxGuests && formik.errors.roomDetails?.[roomIndex]?.maxGuests}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].roomSize`}
                                        label="Room Size (sqft)"
                                        fullWidth
                                        type="number"
                                        error={formik.touched.roomDetails?.[roomIndex]?.roomSize && Boolean(formik.errors.roomDetails?.[roomIndex]?.roomSize)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.roomSize && formik.errors.roomDetails?.[roomIndex]?.roomSize}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        as={TextField}
                                        name={`roomDetails[${roomIndex}].basePricePerNight`}
                                        label="Base Price per Night"
                                        fullWidth
                                        type="number"
                                        error={formik.touched.roomDetails?.[roomIndex]?.basePricePerNight && Boolean(formik.errors.roomDetails?.[roomIndex]?.basePricePerNight)}
                                        helpertext={formik.touched.roomDetails?.[roomIndex]?.basePricePerNight && formik.errors.roomDetails?.[roomIndex]?.basePricePerNight}
                                    />
                                </Grid>

                                <Grid container justifyContent={'flex-end'}>
                                    {(lastIndex === roomIndex || lastIndex === 0) && (
                                        <Button
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
                                                    roomPhoto: [],
                                                });
                                                setLastIndex(roomIndex);
                                            }}
                                        >
                                            Add Room
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        ))
                    )}
                />
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Field
                                as={Checkbox}
                                name="offerLowerRate"
                                type="checkbox"
                            />
                        }
                        label="Offer a lower rate when there are less than 7 guests?"
                    />
                </Grid>

                {offerLowerRate && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <Field
                                as={TextField}
                                name="discountAmount"
                                label="Discount Amount (%)"
                                fullWidth
                                type="number"
                                error={formik.touched.discountAmount && Boolean(formik.errors.discountAmount)}
                                helpertext={formik.touched.discountAmount && formik.errors.discountAmount}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                as={TextField}
                                name="minOccupancyForDiscount"
                                label="Min Occupancy for Discount"
                                fullWidth
                                type="number"
                                error={formik.touched.minOccupancyForDiscount && Boolean(formik.errors.minOccupancyForDiscount)}
                                helpertext={formik.touched.minOccupancyForDiscount && formik.errors.minOccupancyForDiscount}
                            />
                        </Grid>
                    </>
                )}
            </Grid>
            <Grid item xs={12}>
                <DropzoneArea
                    style={{ margin: "10px" }}
                    acceptedFiles={['image/*']}
                    filesLimit={20}
                    dropzoneText="Drag and drop an images of the rooms here or click"
                    onChange={(files) => formik.setFieldValue(`roomPhotos`, files)}
                />
            </Grid>
            <Grid justifyContent="space-between">
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

const mostRequestedByGuestsOptions = [
    "Free Wi-Fi", "Parking", "24-Hour Front Desk", "Air Conditioning", "Room Service", "Restaurant", "Swimming Pool", "Fitness Center", "Lounge", "Business Center", "Conference/Meeting Rooms", "Laundry Service", "Concierge Service", "Airport Shuttle", "Pet-Friendly", "Non-Smoking Rooms", "Family Rooms", "Kitchenette", "Coffee/Tea Maker", "Cable/Satellite TV", "Safe", "Ironing Facilities", "Hair Dryer", "Bathrobe", "Slippers", "In-Room Jacuzzi", "Balcony/Patio", "Sea View", "Mountain View", "Garden", "Playground", "Shuttle Service", "Hiking Trails", "Bicycle Rental", "Room Safe", "Desk", "Telephone", "Wake-up Service", "Dry Cleaning", "Car Rental", "Free Breakfast", "Express Check-in/Check-out", "Luggage Storage", "Newspapers", "Handicapped Accessibility", "Elevator", "In-Room Dining", "Fireplaces"
];
function AmenitiesForm({ isLastStep, handleBack, handleNext }) {
    const handleFileChange = (files) => {
        console.log('Selected files:', files);
    };

    const handleDropzoneClose = () => {
        console.log('Dropzone closed');
    };
    const formik = useFormikContext();
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
                                            name={`hotelAmenities[${index}]`}
                                            checked={formik.values.amenities && amenities[index]}
                                            onChange={formik.handleChange}
                                        />
                                    }
                                    label={option} />

                            </Grid>
                        ))}

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <DropzoneArea
                        onChange={(files) => {
                            console.log("Files", files)
                            formik.setFieldValue(`propertyPhotos`, files)
                        }}
                        acceptedFiles={['image/*']}
                        filesLimit={20}
                        dropzoneText="Drag and drop images here or click"
                        getFileLimitExceedMessage={(filesLimit) =>
                            `You can only upload a maximum of ${filesLimit} files.`
                        }
                        clearOnUnmount={false}
                        Icon={(props) => (
                            <div
                                style={{
                                    fontSize: 40,
                                    textAlign: 'center',
                                    border: '2px dashed #a9a9a9',
                                    borderRadius: 10,
                                    padding: 20,
                                    margin: 50,

                                }}
                            >
                                upload your property pictures
                            </div>
                        )}

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

const policies = [
    "No smoking in rooms", "Pets are not allowed", "Accommodate Children", "Allow Pets", "Cancellation Policy", "Minimum check-in age is 18", "Extra beds available with surcharge", "Alcohol Policy", "Additional Guests Allowed", "Identification Required", "Credit Card or Cash Deposit Required", "Photo ID at Check-in", "No Rollaway/Extra Beds", "No Cribs (Infant Beds)", "No Parking"
];
const timeOptions = [
    "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM",
    "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM",
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
    "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM",
];

function PoliciesForm({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1">Policies</Typography>
                </Grid>

                {policies.map((option, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name={`policies[${index}]`}
                                    checked={formik.values.policies[index]}
                                    onChange={formik.handleChange}
                                />
                            }
                            label={option} />

                    </Grid>
                ))}

                <Grid item xs={6}>
                    <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                        <InputLabel id="check-in-time">Check-in Time</InputLabel>
                        <Field
                            as={Select}
                            name="checkInTime"
                            label="Check-in Time"
                            fullWidth
                            onChange={(e) => formik.setFieldValue("checkInTime", e.target.value)}

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
                            name="checkOutTime"
                            label="Check-out Time"
                            fullWidth
                            onChange={(e) => formik.setFieldValue("checkOutTime", e.target.value)}

                        >
                            {timeOptions.map((time, index) => (
                                <MenuItem key={index} value={time}>
                                    {time}
                                </MenuItem>
                            ))}
                        </Field>
                    </FormControl>
                </Grid>
                <Grid justifyContent="space-between">
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
            </Grid>
        </>
    );
}

function SubmitData() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    };

    const paperStyle = {
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px',
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '8px',
    };

    const messageStyle = {
        fontSize: '16px',
        marginBottom: '16px',
    };

    const backButtonStyle = {
        marginTop: '8px',
    };

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/listing/add-property'); // Navigate to the specified URL
    };

    return (
        <div style={containerStyle}>
            <div style={paperStyle}>
                <div style={headerStyle}>Data Submitted Successfully!</div>
                <div style={messageStyle}>Thank you for submitting your data.</div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBackButtonClick}
                    style={backButtonStyle}
                >
                    Back
                </Button>
            </div>
        </div>
    );
}
export {
    BasicInfoForm,
    ContactDetailsForm,
    PropertyLocationForm,
    RoomDetailsForm,
    AmenitiesForm,
    PoliciesForm,
    SubmitData
};
