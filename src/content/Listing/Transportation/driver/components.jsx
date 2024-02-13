import { useState } from 'react';
import axios from 'axios';
import { useFormikContext, Field, FieldArray } from 'formik';
import { Button, Grid, Box, Typography, TextField, FormControl, FormControlLabel, InputLabel, Select, Checkbox, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Dropzone, FileMosaic, FullScreen, ImagePreview, VideoPreview, } from "@files-ui/react";


const DriverInformationForm = ({ isLastStep, handleBack, handleNext }) => {
  const formik = useFormikContext();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1">Driver Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            name="driverInformation.fullName"
            label="Full Name"
            fullWidth
            error={formik.touched.driverInformation?.fullName && Boolean(formik.errors.driverInformation?.fullName)}
            helperText={formik.touched.driverInformation?.fullName && formik.errors.driverInformation?.fullName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="driverInformation.contactInformation.phone"
            label="Phone"
            type="number"
            fullWidth
            error={formik.touched.driverInformation?.contactInformation?.phone && Boolean(formik.errors.driverInformation?.contactInformation?.phone)}
            helperText={formik.touched.driverInformation?.contactInformation?.phone && formik.errors.driverInformation?.contactInformation?.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            as={TextField}
            name="driverInformation.contactInformation.whatsapp"
            label="Whatsapp(+92 3XX XXXXXXX)"
            type="number"
            fullWidth
            error={formik.touched.driverInformation?.contactInformation?.whatsapp && Boolean(formik.errors.driverInformation?.contactInformation?.whatsapp)}
            helperText={formik.touched.driverInformation?.contactInformation?.whatsapp && formik.errors.driverInformation?.contactInformation?.whatsapp}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            name="driverInformation.contactInformation.address"
            label="Address"
            multiline
            minRows={3}
            fullWidth
            error={formik.touched.driverInformation?.address && Boolean(formik.errors.driverInformation?.address)}
            helperText={formik.touched.driverInformation?.address && formik.errors.driverInformation?.address}
          />
        </Grid>
      </Grid>
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
};

const DriverLicenseDataForm = ({ isLastStep, handleBack, handleNext }) => {
  const formik = useFormikContext();
  const [driverLicenseData, setDriverLicenseData] = useState(formik.values.driverLicense)
  const handleNextClick = () => {
    // formik.setFieldValue('driverLicense', driverLicenseData).then(() => {
    formik.values.driverLicense = driverLicenseData;
    handleNext();
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1">Driver License Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <Field
            name="driverLicenseData.licenseNumber"
            label="License Number"
            component={TextField}
            fullWidth
            value={driverLicenseData.licenseNumber}
            onChange={(e) => {
              setDriverLicenseData({ ...driverLicenseData, licenseNumber: `${e.target.value}` });
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.driverLicense?.licenseNumber && Boolean(formik.errors.driverLicense?.licenseNumber)}
            helperText={formik.touched.driverLicense?.licenseNumber && formik.errors.driverLicense?.licenseNumber}
          />
        </Grid>
        <Grid item xs={12}>

          <Field
            name="driverLicenseData.expiryDate"
            label="Expiry Date (YYYY-MM-DD)"
            component={TextField}
            fullWidth
            value={driverLicenseData.expiryDate}
            onChange={(e) => {
              setDriverLicenseData({ ...driverLicenseData, expiryDate: `${e.target.value}` });
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.driverLicense?.expiryDate && Boolean(formik.errors.driverLicense?.expiryDate)}
          //  helperText={formik.touched.driverLicenseData?.expiryDate && formik.errors.driverLicenseData?.expiryDate}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="driverLicenseData.licenseType"
            label="License Type"
            fullWidth
            component={TextField}
            value={driverLicenseData.licenseType}
            onChange={(e) => {
              setDriverLicenseData({ ...driverLicenseData, licenseType: `${e.target.value}` });
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.driverLicense?.licenseType && Boolean(formik.errors.driverLicense?.licenseType)}
          // helperText={formik.touched.driverLicenseData?.licenseType && formik.errors.driverLicenseData?.licenseType}
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
          onClick={handleNextClick}
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "30%", float: "right" }}
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </Grid >
    </>
  );
};

const vehicleTypes = ["Sedan", "SUV", "Truck", "Van", "Electric Vehicle (EV)", "Hybrid", "Crossover", "Minivan", "Pickup Truck", "City Bus", "Intercity Bus", "Taxi", "Couch",];

const DriverExperienceDataForm = ({ handleBack, handleNext, isLastStep }) => {
  const formik = useFormikContext();
  const [driverExperienceData, setDriverExperienceData] = useState(
    formik.values.driverExperience || [
      {
        position: '',
        vehicletype: '',
        company: '',
        route: '',
        startDate: '',
        currentlyWorking: false,
        endDate: '',
      },
    ])
  const handleChange = (index, field, value) => {
    const updatedExperience = [...driverExperienceData];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    setDriverExperienceData(updatedExperience);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = driverExperienceData.filter((_, idx) => idx !== index);
    setDriverExperienceData(updatedExperience);
  };

  const handleNextClick = () => {
    // formik.setFieldValue('driverLicense', driverLicenseData).then(() => {
    formik.values.driverExperience = driverExperienceData;
    handleNext();
  };
  return (
    <div>
      <div>
        {driverExperienceData.map((experience, index) => (
          <Grid container spacing={2} key={index} sx={{ mb: 5 }}>
            <Grid item xs={12}>
              <Typography variant='h2'> Experience {index + 1}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={`driverExperienceData[${index}].position`}
                label="Position"
                component={TextField}
                fullWidth
                value={driverExperienceData?.[index]?.position}
                onChange={(e) => handleChange(index, 'position', e.target.value)}
                onBlur={formik.handleBlur}
                error={formik.touched.driverExperienceData?.[index]?.position && Boolean(formik.errors.driverExperienceData?.[index]?.position)}
              // helperText={formik.touched.driverExperienceData?.[index]?.position && formik.errors.driverExperienceData?.[index]?.position}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id={`driverExperienceData-${index}-vehicleType-label`}>Vehicle Type</InputLabel>
                <Field
                  as={Select}
                  labelId={`driverExperienceData-${index}-vehicleType-label`}
                  label="Vehicle Type"
                  name={`driverExperienceData[${index}].vehicletype`}
                  value={driverExperienceData?.[index]?.vehicletype}
                  onChange={(e) => handleChange(index, 'vehicletype', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.driverExperienceData?.[index]?.vehicletype && Boolean(formik.errors.driverExperienceData?.[index]?.vehicletype)}
                // helperText={formik.touched.driverExperienceData?.[index]?.vehicletype && formik.errors.driverExperienceData?.[index]?.vehicletype}
                >
                  {vehicleTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={`driverExperienceData[${index}].company`}
                label="Company"
                component={TextField}
                fullWidth
                value={driverExperienceData?.[index]?.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                onBlur={formik.handleBlur}
                error={formik.touched.driverExperienceData?.[index]?.company && Boolean(formik.errors.driverExperienceData?.[index]?.company)}
              // helperText={formik.touched.driverExperienceData?.[index]?.company && formik.errors.driverExperienceData?.[index]?.company}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={`driverExperienceData[${index}].route`}
                label="Route"
                component={TextField}
                fullWidth
                value={driverExperienceData?.[index]?.route}
                onChange={(e) => handleChange(index, 'route', e.target.value)}
                onBlur={formik.handleBlur}
                error={formik.touched.driverExperienceData?.[index]?.route && Boolean(formik.errors.driverExperienceData?.[index]?.route)}
              // helperText={formik.touched.driverExperienceData?.[index]?.route && formik.errors.driverExperienceData?.[index]?.route}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Field
                name={`driverExperienceData[${index}].startDate`}
                label="Start Date(YYYY-MM-DD)"
                component={TextField}
                fullWidth
                value={driverExperienceData?.[index]?.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                onBlur={formik.handleBlur}
                error={formik.touched.driverExperienceData?.[index]?.startDate && Boolean(formik.errors.driverExperienceData?.[index]?.startDate)}
              // helperText={formik.touched.driverExperienceData?.[index]?.startDate && formik.errors.driverExperienceData?.[index]?.startDate}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={experience.currentlyWorking}
                    onChange={(e) => handleChange(index, 'currentlyWorking', e.target.checked)}
                    name={`driverExperienceData[${index}].currentlyWorking`}
                  />
                }
                label="Currently Working"
              />
            </Grid>
            {!experience.currentlyWorking && (
              <Grid item xs={12} sm={5}>
                <Field
                  name={`driverExperienceData[${index}].endDate`}
                  label="End Date(YYYY-MM-DD)"
                  component={TextField}
                  fullWidth
                  value={driverExperienceData?.[index]?.endDate}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.driverExperienceData?.[index]?.endDate && Boolean(formik.errors.driverExperienceData?.[index]?.endDate)}
                // helperText={formik.touched.driverExperienceData?.[index]?.endDate && formik.errors.driverExperienceData?.[index]?.endDate}
                />
              </Grid>
            )}
            {index !== 0 && (
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleRemoveExperience(index)}
                >
                  Delete
                </Button>
              </Grid>
            )}
          </Grid>
        ))}
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setDriverExperienceData([
                ...driverExperienceData,
                {
                  position: '',
                  vehicletype: '',
                  company: '',
                  route: '',
                  startDate: '',
                  currentlyWorking: false,
                  endDate: '',
                },
              ]);
            }}
          >
            Add Another Experience
          </Button>
        </Grid>
      </div>


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
          onClick={handleNextClick}
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "30%", float: "right" }}
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </Grid>
    </div>
  );
};

const DriverExpertiseForm = ({ handleBack, handleNext, isLastStep }) => {
  const formik = useFormikContext();

  return (
    <div>
      <FieldArray
        name="driverExperties"
        render={({ push, remove }) => (
          <div>
            {(formik.values.driverExperties).map((expertise, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 5 }}>
                <Grid item xs={12}>
                  <Typography variant='h2'> Expertise {index + 1}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id={`driverExperties-${index}-vehicleType-label`}>Vehicle Type</InputLabel>
                    <Field
                      as={Select}
                      name={`driverExperties[${index}].vehicleType`}
                      labelId={`driverExperties-${index}-vehicleType-label`}
                      label="Vehicle Type"
                      fullWidth
                      value={formik.values.driverExperties?.[index]?.vehicleType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.driverExperties?.[index]?.vehicleType && Boolean(formik.errors.driverExperties?.[index]?.vehicleType)}
                      helperText={formik.touched.driverExperties?.[index]?.vehicleType && formik.errors.driverExperties?.[index]?.vehicleType}
                    >
                      {vehicleTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name={`driverExperties[${index}].route`}
                    label="Route"
                    fullWidth
                    value={formik.values.driverExperties?.[index]?.route}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.driverExperties?.[index]?.route && Boolean(formik.errors.driverExperties?.[index]?.route)}
                    helperText={formik.touched.driverExperties?.[index]?.route && formik.errors.driverExperties?.[index]?.route}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={expertise.hasCertificate}
                        onChange={formik.handleChange}
                        name={`driverExperties[${index}].hasCertificate`}
                      />
                    }
                    label="Certificate"
                  />
                </Grid>
                <Grid item xs={10} sm={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={expertise.hasFormalTraining}
                        onChange={formik.handleChange}
                        name={`driverExperties[${index}].hasFormalTraining`}
                      />
                    }
                    label="Formal Training"
                  />
                </Grid>
                {index !== 0 && (
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => remove(index)}
                    >
                      Delete
                    </Button>
                  </Grid>
                )}
              </Grid>
            ))}
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                onClick={() => push({ vehicleType: '', route: '', hasCertificate: false, hasFormalTraining: false })}
              >
                Add Another Expertise
              </Button>
            </Grid>
          </div>
        )}
      />

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
    </div>
  );
};

const DrivingRecordForm = ({ isLastStep, handleBack, handleNext }) => {
  const formik = useFormikContext();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1">Driving Record Information</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Number of Accidents"
            type="number"
            name="drivingRecord.numberOfAccidents"
            value={formik.values.drivingRecord?.numberOfAccidents}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.drivingRecord?.numberOfAccidents && Boolean(formik.errors.drivingRecord?.numberOfAccidents)}
            helperText={formik.touched.drivingRecord?.numberOfAccidents && formik.errors.drivingRecord?.numberOfAccidents}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nature of Accidents"
            name="drivingRecord.natureOfAccidents"
            value={formik.values.drivingRecord?.natureOfAccidents}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.drivingRecord?.natureOfAccidents && Boolean(formik.errors.drivingRecord?.natureOfAccidents)}
            helperText={formik.touched.drivingRecord?.natureOfAccidents && formik.errors.drivingRecord?.natureOfAccidents}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Number of Violations and Challans"
            type="number"
            name="drivingRecord.numberOfViolationsAndChallans"
            value={formik.values.drivingRecord?.numberOfViolationsAndChallans}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.drivingRecord?.numberOfViolationsAndChallans && Boolean(formik.errors.drivingRecord?.numberOfViolationsAndChallans)}
            helperText={formik.touched.drivingRecord?.numberOfViolationsAndChallans && formik.errors.drivingRecord?.numberOfViolationsAndChallans}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Number of Terminations"
            type="number"
            name="drivingRecord.numberOfTerminations"
            value={formik.values.drivingRecord?.numberOfTerminations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.drivingRecord?.numberOfTerminations && Boolean(formik.errors.drivingRecord?.numberOfTerminations)}
            helperText={formik.touched.drivingRecord?.numberOfTerminations && formik.errors.drivingRecord?.numberOfTerminations}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">Background Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.backgroundCheck.cleanCriminalRecord}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="backgroundCheck.cleanCriminalRecord"
              />
            }
            label="Do you have a clean criminal record certificate?"
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

const EmergencyContactForm = ({ isLastStep, handleBack, handleNext }) => {
  const formik = useFormikContext();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1">Emergency Contact Information</Typography>
        </Grid>
        <FieldArray
          name="emergencyContact"
          render={(arrayHelpers) => (
            <>
              {formik.values.emergencyContact.map((emergency, index) => (
                <Grid container spacing={2} key={index} sx={{ mt: 2, m: 1, p: 1, border: 1 }}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name={`emergencyContact[${index}].name`}
                      value={emergency.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.emergencyContact?.[index]?.name && Boolean(formik.errors.emergencyContact?.[index]?.name)}
                      helperText={formik.touched.emergencyContact?.[index]?.name && formik.errors.emergencyContact?.[index]?.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contact Information"
                      name={`emergencyContact[${index}].contactInformation`}
                      value={emergency.contactInformation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.emergencyContact?.[index]?.contactInformation && Boolean(formik.errors.emergencyContact?.[index]?.contactInformation)}
                      helperText={formik.touched.emergencyContact?.[index]?.contactInformation && formik.errors.emergencyContact?.[index]?.contactInformation}
                    />
                  </Grid>
                  {index !== 0 && (
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  )}
                </Grid>
              ))}

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => arrayHelpers.push({ name: '', contactInformation: '' })}
                >
                  Add Contact
                </Button>
              </Grid>
            </>
          )}
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
    </>
  );
};

function Photos({ isLastStep, handleBack, handleNext }) {
  const formik = useFormikContext();

  const [extFiles, setExtFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [tempChecked, setTempChecked] = useState({});

  const checkboxArray = [
    { label: 'Profile', fieldName: 'profile' },
    { label: 'Certificate', fieldName: 'certificatePhoto' },
    // Add more labels and field names as needed
  ];

  const BASE_URL = "http://localhost:8000/api/driver/";

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
    for (let i = 0; i < extFiles.length; i++) {
      formData.append("files", extFiles[i].file);
      console.log("infiles", extFiles[i].file);
    }
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    await axios.post('http://localhost:8000/api/driver/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    ).then((res) => {
      console.log("Response", res);
    });

  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">Upload Photo</Typography>
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
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100px', width: '200px', padding: '5px' }}>
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
                    <Typography variant='p'>Note:<br /> Upload all the certficate you have.<br />(e.g Driving License, Character Certificate, Experience Certificate, etc. )</Typography>

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
                        if (fieldName === 'profile') {
                          formik.setFieldValue('photos.profile', imageSrc);
                        } else if (fieldName === 'certificatePhoto') {
                          const certificatePhotos = formik.values.photos.certificatePhoto || [];
                          if (!certificatePhotos.includes(imageSrc)) {
                            formik.setFieldValue('photos.certificatePhoto', [...certificatePhotos, imageSrc]);
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
  DriverInformationForm,
  DriverLicenseDataForm,
  DriverExperienceDataForm,
  DriverExpertiseForm,
  DrivingRecordForm,
  EmergencyContactForm,
  Photos
}