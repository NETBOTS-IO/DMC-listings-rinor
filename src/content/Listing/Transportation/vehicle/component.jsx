import React from 'react';
import { useFormikContext, Field } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import { Grid, Typography, TextField, Select, MenuItem, Checkbox, FormControl, FormControlLabel, InputLabel, Button, FormGroup } from '@mui/material';

const VehicleInformationForm = ({ isLastStep, handleBack, handleNext }) => {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Vehicle Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="company"
                        name="vehicleInformation.company"
                        value={formik.values.vehicleInformation.company}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vehicleInformation?.company && Boolean(formik.errors.vehicleInformation?.company)}
                        helperText={formik.touched.vehicleInformation?.company && formik.errors.vehicleInformation?.company}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Model"
                        name="vehicleInformation.model"
                        value={formik.values.vehicleInformation.model}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vehicleInformation?.model && Boolean(formik.errors.vehicleInformation?.model)}
                        helperText={formik.touched.vehicleInformation?.model && formik.errors.vehicleInformation?.model}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Year"
                        name="vehicleInformation.year"
                        type="number"
                        value={formik.values.vehicleInformation.year}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vehicleInformation?.year && Boolean(formik.errors.vehicleInformation?.year)}
                        helperText={formik.touched.vehicleInformation?.year && formik.errors.vehicleInformation?.year}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Fuel Type"
                        name="vehicleInformation.fuelType"
                        value={formik.values.vehicleInformation.fuelType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vehicleInformation?.fuelType && Boolean(formik.errors.vehicleInformation?.fuelType)}
                        helperText={formik.touched.vehicleInformation?.fuelType && formik.errors.vehicleInformation?.fuelType}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Mileage"
                        name="vehicleInformation.mileage"
                        type="number"
                        value={formik.values.vehicleInformation.mileage}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vehicleInformation?.mileage && Boolean(formik.errors.vehicleInformation?.mileage)}
                        helperText={formik.touched.vehicleInformation?.mileage && formik.errors.vehicleInformation?.mileage}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="right">
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
};


const VehicleFeaturesForm = ({ isLastStep, handleBack, handleNext }) => {
    const formik = useFormikContext();

    const handleAddAmenity = () => {
        const newAmenity = formik.values.vehicleFeatures.additionalAmenities || [];
        newAmenity.push(formik.values.vehicleFeatures.newAmenity || '');
        formik.setFieldValue('vehicleFeatures.additionalAmenities', newAmenity);
        formik.setFieldValue('vehicleFeatures.newAmenity', ''); // Reset the input field
    };

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Vehicle Features</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Number of Passengers"
                        name="vehicleFeatures.passengers"
                        type="number"
                        value={formik.values.vehicleFeatures.passengers}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vehicleFeatures?.passengers && Boolean(formik.errors.vehicleFeatures?.passengers)}
                        helperText={formik.touched.vehicleFeatures?.passengers && formik.errors.vehicleFeatures?.passengers}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h1">Amenities</Typography>
                </Grid>
                {/* Predefined Amenities */}
                <Grid item xs={12}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.vehicleFeatures.airConditioning}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="vehicleFeatures.airConditioning"
                                />
                            }
                            label="Air Conditioning"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.vehicleFeatures.radio}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="vehicleFeatures.radio"
                                />
                            }
                            label="Radio"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.vehicleFeatures.mp3Player}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="vehicleFeatures.mp3Player"
                                />
                            }
                            label="MP3/MP4 Player"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.vehicleFeatures.toolkit}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="vehicleFeatures.toolkit"
                                />
                            }
                            label="Toolkit"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.vehicleFeatures.airbag}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="vehicleFeatures.airbag"
                                />
                            }
                            label="Airbag"
                        />
                        {formik.values.vehicleFeatures.additionalAmenities &&
                            formik.values.vehicleFeatures.additionalAmenities.map((amenity, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={<Checkbox defaultChecked />}
                                    label={amenity}
                                />
                            ))}
                    </FormGroup>

                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Additional Amenities</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            fullWidth
                            label="Add Custom Amenity"
                            name="vehicleFeatures.newAmenity"
                            value={formik.values.vehicleFeatures.newAmenity || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button sx={{ height: 54, ml: -3.5 }} variant="contained" color="primary" onClick={handleAddAmenity}>
                            Add Amenity
                        </Button>
                    </Grid>

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
};


const DocumentationForm = ({ isLastStep, handleBack, handleNext }) => {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Documentation</Typography>
                </Grid>
                <Grid container spacing={2} sx={{ ml: 2 }}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Registration Details</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="registrationNatureLabel" sx={{ mt: 1 }}>
                                Registration Nature
                            </InputLabel>
                            <Select
                                labelId="registrationNatureLabel"
                                name="documentation.registrationNature"
                                value={"SelectNatureofRegistration" || formik.values.documentation.registrationNature}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="SelectNatureofRegistration" disabled>
                                    Select Nature of Registration
                                </MenuItem>
                                <MenuItem value="customPaid">Custom Paid</MenuItem>
                                <MenuItem value="nonCustomPaid">Non Custom Paid</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            as={TextField}
                            fullWidth
                            label="Registration Number"
                            name="documentation.registrationNumber"
                            type="number"
                            value={formik.values.documentation.registrationNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            as={TextField}
                            fullWidth
                            label="Registration Year"
                            name="documentation.registrationYear"
                            type="number"
                            value={formik.values.documentation.registrationYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                </Grid>
                {/* Insurance Details */}
                <Grid item xs={12}>
                    <Typography variant="h2">Insurance Details</Typography>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Insurance Details"
                        name="documentation.insuranceDetails"
                        value={formik.values.documentation.insuranceDetails}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
};


const PricingForm = ({ isLastStep, handleBack, handleNext }) => {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Pricing</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Booking Rate"
                        name="pricing.rentalRates.booking"
                        type="number"
                        value={formik.values.pricing.rentalRates.booking || 0}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.pricing?.rentalRates?.booking && Boolean(formik.errors.pricing?.rentalRates?.booking)}
                        helperText={formik.touched.pricing?.rentalRates?.booking && formik.errors.pricing?.rentalRates?.booking}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Single Passenger Rate"
                        name="pricing.rentalRates.perPassenger"
                        type="number"
                        value={formik.values.pricing.rentalRates.perPassenger || 0}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.pricing?.rentalRates?.perPassenger && Boolean(formik.errors.pricing?.rentalRates?.perPassenger)}
                        helperText={formik.touched.pricing?.rentalRates?.perPassenger && formik.errors.pricing?.rentalRates?.perPassenger}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Security Deposit"
                        name="pricing.securityDeposit"
                        type="number"
                        value={formik.values.pricing.securityDeposit}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.pricing?.securityDeposit && Boolean(formik.errors.pricing?.securityDeposit)}
                        helperText={formik.touched.pricing?.securityDeposit && formik.errors.pricing?.securityDeposit}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Discounts"
                        name="pricing.discounts"
                        value={formik.values.pricing.discounts}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.pricing?.discounts && Boolean(formik.errors.pricing?.discounts)}
                        helperText={formik.touched.pricing?.discounts && formik.errors.pricing?.discounts}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Cancellation Policy"
                        name="pricing.cancellationPolicy"
                        value={formik.values.pricing.cancellationPolicy}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.pricing?.cancellationPolicy && Boolean(formik.errors.pricing?.cancellationPolicy)}
                        helperText={formik.touched.pricing?.cancellationPolicy && formik.errors.pricing?.cancellationPolicy}
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
};


const OwnerInfoForm = ({ isLastStep, handleBack, handleNext }) => {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Owner Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Owner Name"
                        name="ownerInfo.contactInfo.name"
                        value={formik.values.ownerInfo.contactInfo.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.ownerInfo?.contactInfo?.name && Boolean(formik.errors.ownerInfo?.contactInfo?.name)}
                        helperText={formik.touched.ownerInfo?.contactInfo?.name && formik.errors.ownerInfo?.contactInfo?.name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Contact Number"
                        name="ownerInfo.contactInfo.contact"
                        type="number"
                        value={formik.values.ownerInfo.contactInfo.contact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.ownerInfo?.contactInfo?.contact && Boolean(formik.errors.ownerInfo?.contactInfo?.contact)}
                        helperText={formik.touched.ownerInfo?.contactInfo?.contact && formik.errors.ownerInfo?.contactInfo?.contact}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        multiline
                        minRows={3} 
                        label="Address"
                        name="ownerInfo.contactInfo.address"
                        value={formik.values.ownerInfo.contactInfo.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.ownerInfo?.contactInfo?.address && Boolean(formik.errors.ownerInfo?.contactInfo?.address)}
                        helperText={formik.touched.ownerInfo?.contactInfo?.address && formik.errors.ownerInfo?.contactInfo?.address}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Reviews"
                        name="ownerInfo.reviews"
                        value={formik.values.ownerInfo.reviews.join(', ')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.ownerInfo?.reviews && Boolean(formik.errors.ownerInfo?.reviews)}
                        helperText={formik.touched.ownerInfo?.reviews && formik.errors.ownerInfo?.reviews}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Terms and Conditions"
                        name="termsAndConditions"
                        value={formik.values.termsAndConditions}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.termsAndConditions && Boolean(formik.errors.termsAndConditions)}
                        helperText={formik.touched.termsAndConditions && formik.errors.termsAndConditions}
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
};



const ImagesForm = ({ isLastStep, handleBack, handleNext }) => {
    const formik = useFormikContext();

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h1">Images</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Exterior Image URL"
                        name="images.exterior"
                        value={formik.values.images.exterior}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.images?.exterior && Boolean(formik.errors.images?.exterior)}
                        helperText={formik.touched.images?.exterior && formik.errors.images?.exterior}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Interior Image URL"
                        name="images.interior"
                        value={formik.values.images.interior}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.images?.interior && Boolean(formik.errors.images?.interior)}
                        helperText={formik.touched.images?.interior && formik.errors.images?.interior}
                    />
                </Grid>
                <Grid item xs={12}>
                    <DropzoneArea
                        acceptedFiles={['image/*']}
                        dropzoneText="Drag and drop an image here or click"
                        onChange={(files) => formik.setFieldValue('images.additionalImages', files)}
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
};


export {
    VehicleInformationForm,
    VehicleFeaturesForm,
    DocumentationForm,
    PricingForm,
    OwnerInfoForm,
    ImagesForm
};