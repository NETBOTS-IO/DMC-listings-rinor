import { useFormikContext, Field, FieldArray } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import { Grid, Typography, FormControlLabel, Checkbox, TextField, Button, FormControl, InputLabel, Select, MenuItem, } from '@mui/material';


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

const vehicleTypes = ["Sedan", "SUV", "Truck", "Van", "Electric Vehicle (EV)", "Hybrid", "Crossover", "Minivan", "Pickup Truck", "City Bus", "Intercity Bus", "Taxi", "Couch",];

const DriverExperienceForm = ({ handleBack, handleNext, isLastStep }) => {
  const formik = useFormikContext();

  return (
    <div>
      <FieldArray
        name="driverExperience"
        render={({ insert, remove, push }) => (
          <div>
            {formik.values.driverExperience.map((experience, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 5 }}>
                <Grid item xs={12}>
                  <Typography variant='h2'> Experience {index + 1}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name={`driverExperience[${index}].position`}
                    label="Position"
                    component={TextField}
                    fullWidth
                    value={formik.values.driverExperience?.[index]?.position || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.driverExperience?.[index]?.position && Boolean(formik.errors.driverExperience?.[index]?.position)}
                    helperText={formik.touched.driverExperience?.[index]?.position && formik.errors.driverExperience?.[index]?.position}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id={`driverExperience-${index}-vehicleType-label`}>Vehicle Type</InputLabel>
                    <Field
                      as={Select}
                      labelId={`driverExperience-${index}-vehicleType-label`}
                      label="Vehicle Type"
                      name={`driverExperience[${index}].vehicletype`}
                      value={formik.values.driverExperience?.[index]?.vehicletype || ''}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.driverExperience?.[index]?.vehicletype && Boolean(formik.errors.driverExperience?.[index]?.vehicletype)}
                      helperText={formik.touched.driverExperience?.[index]?.vehicletype && formik.errors.driverExperience?.[index]?.vehicletype}
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
                    name={`driverExperience[${index}].company`}
                    label="Company"
                    component={TextField}
                    fullWidth
                    value={formik.values.driverExperience?.[index]?.company || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.driverExperience?.[index]?.company && Boolean(formik.errors.driverExperience?.[index]?.company)}
                    helperText={formik.touched.driverExperience?.[index]?.company && formik.errors.driverExperience?.[index]?.company}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name={`driverExperience[${index}].route`}
                    label="Route"
                    component={TextField}
                    fullWidth
                    value={formik.values.driverExperience?.[index]?.route || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.driverExperience?.[index]?.route && Boolean(formik.errors.driverExperience?.[index]?.route)}
                    helperText={formik.touched.driverExperience?.[index]?.route && formik.errors.driverExperience?.[index]?.route}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Field
                    name={`driverExperience[${index}].startDate`}
                    label="Start Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    component={TextField}
                    fullWidth
                    value={formik.values.driverExperience?.[index]?.startDate || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.driverExperience?.[index]?.startDate && Boolean(formik.errors.driverExperience?.[index]?.startDate)}
                    helperText={formik.touched.driverExperience?.[index]?.startDate && formik.errors.driverExperience?.[index]?.startDate}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={experience.currentlyWorking}
                        onChange={formik.handleChange}
                        name={`driverExperience[${index}].currentlyWorking`}
                      />
                    }
                    label="Currently Working"
                  />
                </Grid>
                {!experience.currentlyWorking && (
                  <Grid item xs={12} sm={5}>
                    <Field
                      name={`driverExperience[${index}].endDate`}
                      label="End Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={TextField}
                      fullWidth
                      value={formik.values.driverExperience?.[index]?.endDate || ''}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.driverExperience?.[index]?.endDate && Boolean(formik.errors.driverExperience?.[index]?.endDate)}
                      helperText={formik.touched.driverExperience?.[index]?.endDate && formik.errors.driverExperience?.[index]?.endDate}
                    />
                  </Grid>
                )}
              </Grid>
            ))}
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                onClick={() => push({ position: '', vehicletype: '', company: '', route: '', startDate: '', currentlyWorking: false, endDate: '' })}
              >
                Add Another Experience
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
                      value={formik.values.driverExperties?.[index]?.vehicleType || ''}
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
                    value={formik.values.driverExperties?.[index]?.route || ''}
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
                <Grid item xs={12} sm={6}>
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


const DriverLicenseForm = ({ isLastStep, handleBack, handleNext }) => {
  const formik = useFormikContext();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1">Driver License Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="License Number"
            name="driverLicense.licenseNumber"
            value={formik.values.driverLicense.licenseNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.driverLicense?.licenseNumber && Boolean(formik.errors.driverLicense?.licenseNumber)}
            helperText={formik.touched.driverLicense?.licenseNumber && formik.errors.driverLicense?.licenseNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Expiry Date"
            name="driverLicense.expiryDate"
            value={formik.values.driverLicense.expiryDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.driverLicense?.expiryDate && Boolean(formik.errors.driverLicense?.expiryDate)}
            helperText={formik.touched.driverLicense?.expiryDate && formik.errors.driverLicense?.expiryDate}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="License Type"
            name="driverLicense.licenseType"
            value={formik.values.driverLicense.licenseType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.driverLicense?.licenseType && Boolean(formik.errors.driverLicense?.licenseType)}
            helperText={formik.touched.driverLicense?.licenseType && formik.errors.driverLicense?.licenseType}
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
            value={formik.values.drivingRecord?.natureOfAccidents || ''}
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



const BackgroundCheckForm = ({ isLastStep, handleBack, handleNext }) => {
  const formik = useFormikContext();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1">Background Check Information</Typography>
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
        {formik.values.backgroundCheck.cleanCriminalRecord && (
          <>
            <Grid item xs={12}>
              <Typography variant="h2">Upload Certificate</Typography>
              <DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText="Drag and drop an image of the certificate here or click"
                onChange={(files) => formik.setFieldValue("backgroundCheck.certificatePhoto", files[0])}
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Typography variant="h2">Upload Profile Picture</Typography>
          <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText="Drag and drop an image of the driver here or click"
            onChange={(files) => formik.setFieldValue("backgroundCheck.driverPhoto", files[0])}
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="emergencyContact.name"
            value={formik.values.emergencyContact.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emergencyContact?.name && Boolean(formik.errors.emergencyContact?.name)}
            helperText={formik.touched.emergencyContact?.name && formik.errors.emergencyContact?.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Contact Information"
            name="emergencyContact.contactInformation"
            value={formik.values.emergencyContact.contactInformation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emergencyContact?.contactInformation && Boolean(formik.errors.emergencyContact?.contactInformation)}
            helperText={formik.touched.emergencyContact?.contactInformation && formik.errors.emergencyContact?.contactInformation}
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
  DriverInformationForm,
  DriverLicenseForm,
  DriverExperienceForm,
  DriverExpertiseForm,
  DrivingRecordForm,
  BackgroundCheckForm,
  EmergencyContactForm
}