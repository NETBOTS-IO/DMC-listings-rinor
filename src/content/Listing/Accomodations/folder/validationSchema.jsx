import * as Yup from 'yup';

// Validation schema for Property Details section
export const propertyDetailsSchema = Yup.object().shape({
    hotelName: Yup.string().required('Hotel name is required'),
    propertyType: Yup.string().required('Property type is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    stateProvince: Yup.string(),
    postalCode: Yup.string().required('Postal/ZIP code is required'),
    country: Yup.string().required('Country is required'),
});

// Validation schema for Contact Information section
export const contactInformationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    website: Yup.string().url('Invalid website URL format').required('Website is required'),
});

// Validation schema for Rooms & Suites section
export const roomsAndSuitesSchema = Yup.object().shape({
    roomType: Yup.string().required('Room type is required'),
    numberOfBeds: Yup.number()
        .typeError('Number of beds must be a number')
        .integer('Number of beds must be an integer')
        .positive('Number of beds must be positive')
        .required('Number of beds is required'),
    roomAmenities: Yup.array().min(1, 'Select at least one room amenity'),
    roomDescription: Yup.string(),
});

// Validation schema for Policies section
export const policiesSchema = Yup.object().shape({
    checkInOutTimes: Yup.string().required('Check-in/Check-out times are required'),
    petPolicy: Yup.string().required('Pet policy is required'),
    paymentOptions: Yup.array().min(1, 'Select at least one payment option'),
});

// Validation schema for Photos section
export const photosSchema = Yup.object().shape({
    photos: Yup.mixed()
        .test(
            'fileSize',
            'File size is too large',
            (value) => value && value.size <= 5 * 1024 * 1024
        )
        .test('fileType', 'Invalid file format', (value) => value && value.type.startsWith('image/')),
});
