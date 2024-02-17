const initialValues = {
    basicInfo: {
        propertyName: " ",
        starRating: 0,
    },
    contactDetails: {
        contactName: " ",
        phoneNumber: " ",
        altPhoneNumber: "",
        ownMultipleHotels: false,
    },
    channelManager: {
        useChannelManager: true,
        channelManagerName: " ",
    },
    propertyLocation: {
        streetAddress: " ",
        addressLine2: "",
        countryRegion: " ",
        city: " ",
        postCode: 0,
    },
    roomDetails: [{
        roomType: " ",
        roomName: " ",
        numberOfRooms: 10,
        bedOptions: [{
            bedType: " ",
            bedQuantity: 2,
        },
        ],
        maxGuests: 2,
        roomSize: 30,
    }],
    pricing: {
        basePricePerNight: 1000, // PKR
        offerLowerRate: true,
        discountAmount: 10, // Percentage
        minOccupancyForDiscount: 7,
        extraBedOptions: {
            provideExtraBeds: true,
            numberOfExtraBeds: 2,
            accommodateChildrenInExtraBeds: true,
            accommodateAdultsInExtraBeds: false,
        },
    },
    amenities: {
        instructional: " ",
        mostRequestedByGuests: [],
    },
    propertyPhotos: [], // You can add image URLs here
    policies: {
        cancellations: {
            cancelFreeDays: 7,
            penaltyPercentage: 20,
            protectAgainstAccidentalBookings: true,
        },
        checkInTime: " ",
        checkOutTime: " ",
        accommodateChildren: true,
        allowPets: " ",
        petCharges: " ",
    },
};



export default initialValues
