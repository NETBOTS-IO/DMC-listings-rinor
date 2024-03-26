import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    driverInformation: {
        fullName: String,
        contactInformation: {
            phone: String,
            whatsapp: String,
        },
        address: String,
    },
    driverLicense: {
        licenseNumber: String,
        expiryDate: String,
        licenseType: String,
    },
    driverExperience: [{
        position: String,
        vehicletype: String,
        company: String,
        route: String,
        startDate: String,
        currentlyWorking: Boolean,
        endDate: String,
    }],
    driverExperties: [{
        vehicletype: String,
        route: String,
        hasCertificate: Boolean,
        hasFormalTraining: Boolean,
    }],
    drivingRecord: {
        numberOfAccidents: String,
        natureOfAccidents: String,
        numberOfVoilationsAndChalans: String,
        numberOfTerminations: String,
    },
    backgroundCheck: {
        cleanCriminalRecord: Boolean,
    },
    emergencyContact: [{
        name: String,
        contactInformation: String,
    }],
    photos: {
        profile: String,
        certificatePhoto: [String],
    },
    user: {
        name: String,
        designation: String
    }
});

export default mongoose.model('Driver', driverSchema);
