// models/vehicleModel.js
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  vehicleInformation: {
    company: String,
    model: String,
    year: Number,
    fuelType: String,
    transmissionType: String,
    mileage: Number,
  },
  vehicleFeatures: {
    passengers: Number,
    airConditioning: Boolean,
    radio: Boolean,
    mp3Player: Boolean,
    toolkit: Boolean,
    airbag: Boolean,
    additionalAmenities: [String],
    newAmenity: String,
  },
  documentation: {
    registrationDetails: {
      registrationNature: String,
      registrationNumber: Number,
      registrationYear: Number,
    },
    insuranceDetails: String,
  },
  pricing: {
    rentalRates: {
      booking: Number,
      perPassenger: Number,
    },
    securityDeposit: Number,
    discounts: String,
    cancellationPolicy: String,
  },
  ownerInfo: {
    contactInfo: {
      name: String,
      contact: Number,
      address: String,
    },
    reviews: [String],
  },
  termsAndConditions: String,
  photos: {
    ownerPhoto: String,
    vehiclePhotos: [String],
  },
  user: {
    name: String,
    designation: String
  }
});

export default mongoose.model('Vehicle', vehicleSchema);
