import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  basicInfo: {
    propertyType: String,
    propertyName: String,
    hotelChain: String,
    description: String,
    starRating: Number,
  },
  contactDetails: {
    additionalContacts: [
      {
        title: String,
        contactName: String,
        phoneNumber: String,
        altPhoneNumber: String,
        email: String,
      },
    ],
    socialAccLink: String,
    ownMultipleHotels: Boolean,
  },
  propertyLocation: {
    countryRegion: String,
    district: String,
    address: String,
    city: String,
    postCode: Number,
  },
  roomDetails: [
    {
      roomType: String,
      roomName: String,
      numberOfRooms: Number,
      bedType: String,
      bedQuantity: Number,
      maxGuests: Number,
      roomSize: Number,
      basePricePerNight: Number,
    },
  ],
  roomPhotos: [
    {
      roomNames: [String],
      photo: String,
    },
  ],
  offerLowerRate: Boolean,
  discountAmount: Number,
  minOccupancyForDiscount: Number,
  pricing: {
    extraBedOptions: {
      provideExtraBeds: Boolean,
      numberOfExtraBeds: Number,
      accommodateChildrenInExtraBeds: Boolean,
      accommodateAdultsInExtraBeds: Boolean,
    },
  },
  hotelAmenities: [String],

  propertyPhotos: {
    externalPhotos: [String],
    internalPhotos: [String],
  },
  policies: [String],
  checkInTime: String,
  checkOutTime: String,
  cancellations: {
    cancelFreeDays: Number,
    penaltyPercentage: Number,
    protectAgainstAccidentalBookings: Boolean,
  },
  user: {
    name: String,
    designation: String
  }
});
export default mongoose.model("PropertyListing", PropertySchema);
