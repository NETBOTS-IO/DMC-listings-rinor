import React, { useState } from 'react';
import { useFormikContext, Field } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dropzone, FileMosaic, FullScreen, ImagePreview, VideoPreview, } from "@files-ui/react";
import { Button, Grid, Box, Typography, TextField, FormGroup, FormControl, FormControlLabel, InputLabel, Select, Checkbox, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

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
    const handleRemoveAmenity = (index) => {
        const newAmenity = formik.values.vehicleFeatures.additionalAmenities || [];
        newAmenity.pop(formik.values.vehicleFeatures.additionalAmenities[index] || '');
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
                                <Grid container key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Grid item xs={8} sm={4} md={2}>
                                        <FormControlLabel

                                            control={<Checkbox defaultChecked />}
                                            label={amenity}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <DeleteIcon
                                            color="error"
                                            onClick={() => handleRemoveAmenity(index)}
                                        >
                                            Delete
                                        </DeleteIcon>
                                    </Grid>
                                </Grid>
                            )
                            )}
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
                                value={formik.values.documentation.registrationNature || "SelectNatureofRegistration"}
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
                        value={formik.values.pricing.rentalRates.booking}
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
                        value={formik.values.pricing.rentalRates.perPassenger}
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
                        value={formik.values.ownerInfo.reviews}
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
        </>
    );
};



function Photos({ isLastStep, handleBack, handleNext }) {
    const formik = useFormikContext();

    const [extFiles, setExtFiles] = useState([]);
    const [imageSrc, setImageSrc] = useState(undefined);
    const [tempChecked, setTempChecked] = useState({});
    const [disable, setDisable] = useState(true)

    const checkboxArray = [
        { label: 'Owner Photo', fieldName: 'ownerPhoto' },
        { label: 'Vehicle Photos', fieldName: 'vehiclePhotos' },
        // Add more labels and field names as needed
    ];

    const BASE_URL = "https://dmc-listings-server-rinor.vercel.app"
    // || "http://localhost:8000"


    const updateFiles = (incommingFiles) => {
        console.log("incomming files", incommingFiles);
        setExtFiles(incommingFiles);
    };
    const onDelete = (id) => {
        setExtFiles(extFiles.filter((x) => x.id !== id));
    };
    const handleSee = (imageSource) => {
        setImageSrc(imageSource);
        console.log("imageSrc", imageSrc);
    };
    const handleWatch = (videoSource) => {
        setVideoSrc(videoSource);
    };
    const handleStart = (filesToUpload) => {
        console.log("advanced demo start upload", filesToUpload);
    };
    const handleFinish = (uploadedFiles) => {
        console.log("advanced demo finish upload", uploadedFiles);
    };
    const handleAbort = (id) => {
        setExtFiles(
            extFiles.map((ef) => {
                if (ef.id === id) {
                    return { ...ef, uploadStatus: "aborted" };
                } else return { ...ef };
            })
        );
    };
    const handleCancel = (id) => {
        setExtFiles(
            extFiles.map((ef) => {
                if (ef.id === id) {
                    return { ...ef, uploadStatus: undefined };
                } else return { ...ef };
            })
        );
    };

    const handleCancelBtn = () => {
        setImageSrc(undefined);
        setTempChecked({});
    };

    const handleUpload = async () => {
        console.log("i am hreer");
        const formData = new FormData();
        // formData.append("name", formik.values.basicInfo.propertyName);

        for (let i = 0; i < extFiles.length; i++) {
            formData.append("files", extFiles[i].file);
        }
        for (const pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        await axios.post(`${BASE_URL}/api/vehicle/files`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": true
            },
        },
        ).then((res) => {
            console.log("Response", res);
            setDisable(false)
        });

    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1'>Upload Photo</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Dropzone
                        onChange={updateFiles}
                        minHeight="195px"
                        value={extFiles}
                        accept="image/*"
                        maxFiles={5}
                        maxFileSize={2 * 1024 * 1024}
                        label="Drag'n drop files here or click to browse"

                        onUploadStart={handleStart}
                        onUploadFinish={handleFinish}
                    // fakeUpload
                    >
                        {extFiles.map((file) => (
                            <FileMosaic
                                {...file}
                                key={file.id}
                                onDelete={onDelete}
                                onSee={handleSee}
                                onWatch={handleWatch}
                                onAbort={handleAbort}
                                onCancel={handleCancel}
                                resultOnTooltip
                                alwaysActive
                                preview
                                info
                            />
                        ))}
                    </Dropzone>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                            variant='contained'
                            sx={{ m: 1, display: 'flex', justifyContent: 'end' }}
                            onClick={handleUpload}
                        >
                            Upload
                        </Button>
                    </Box>
                    <Grid container sx={{ mt: 5 }} >
                        <Dialog
                            open={imageSrc !== undefined}
                            onClose={() => {
                                setImageSrc(undefined);
                                setTempChecked({});
                            }}
                            maxWidth='lg'
                        >
                            <DialogContent>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100px', width: '200px' }}>
                                        <Typography variant='h4' sx={{ mt: 5 }}>Field List</Typography>
                                        <Typography variant='p' sx={{ mb: 5 }}>Associate the picture with relevant field</Typography>

                                        {checkboxArray.map((checkbox, index) => (
                                            <FormControlLabel
                                                key={index}
                                                control={
                                                    <Field
                                                        type="checkbox"
                                                        name={`selectedPhotos.${index}`}
                                                        render={({ field }) => (
                                                            <Checkbox
                                                                {...field}

                                                                checked={tempChecked[index] || false}
                                                                onChange={(e) => setTempChecked((prev) => ({ ...prev, [index]: e.target.checked }))}
                                                            />

                                                        )
                                                        }
                                                    />
                                                }
                                                label={checkbox.label}
                                            />
                                        ))}

                                    </div>
                                    <div sx={{ p: 2 }}>

                                        <ImagePreview src={imageSrc} />
                                    </div>
                                </div>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCancelBtn} color="error">
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => {
                                        for (const [index, checkbox] of checkboxArray.entries()) {
                                            const fieldName = checkbox.fieldName;
                                            const checkboxChecked = tempChecked[index];
                                            if (checkboxChecked) {
                                                if (fieldName === 'ownerPhoto') {
                                                    formik.setFieldValue('photos.ownerPhoto', imageSrc);
                                                } else if (fieldName === 'vehiclePhotos') {
                                                    const vehiclePhotos = formik.values.photos.vehiclePhotos || [];
                                                    if (!vehiclePhotos.includes(imageSrc)) {
                                                        formik.setFieldValue('photos.vehiclePhotos', [...vehiclePhotos, imageSrc]);
                                                    }
                                                }
                                            }
                                        }
                                        console.log("photos", formik.values.photos)
                                        setTempChecked({});
                                        setImageSrc(undefined);
                                    }}
                                    color="success"
                                >
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>

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
                        disabled={disable}
                        style={{ margin: "30px", width: "30%", float: "right" }}
                    >
                        {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}


export {
    VehicleInformationForm,
    VehicleFeaturesForm,
    DocumentationForm,
    PricingForm,
    OwnerInfoForm,
    Photos
};