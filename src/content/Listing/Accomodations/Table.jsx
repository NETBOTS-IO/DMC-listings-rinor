import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Container, IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';



const roomColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'bedType', headerName: 'Bed Type', width: 130 },
    { field: 'bedQuantity', headerName: 'Bed Quantity', width: 150 },
    { field: 'basePrice', headerName: 'Base Price', width: 150 },
];

const rows = [
    { id: 1, hotelname: 'Hotel A', hoteltype: 'Luxury', city: 'New York', contactnumber: 1234567890, rating: 4.5 },
    { id: 2, hotelname: 'Hotel B', hoteltype: 'Boutique', city: 'San Francisco', contactnumber: 9876543210, rating: 4.2 },
    { id: 3, hotelname: 'Hotel C', hoteltype: 'Resort', city: 'Miami', contactnumber: 5555555555, rating: 4.7 },
    { id: 4, hotelname: 'Hotel A', hoteltype: 'Luxury', city: 'New York', contactnumber: 1234567890, rating: 4.5 },
    { id: 5, hotelname: 'Hotel B', hoteltype: 'Boutique', city: 'San Francisco', contactnumber: 9876543210, rating: 4.2 },
    { id: 6, hotelname: 'Hotel C', hoteltype: 'Resort', city: 'Miami', contactnumber: 5555555555, rating: 4.7 },
    { id: 7, hotelname: 'Hotel B', hoteltype: 'Boutique', city: 'San Francisco', contactnumber: 9876543210, rating: 4.2 },
    { id: 8, hotelname: 'Hotel C', hoteltype: 'Resort', city: 'Miami', contactnumber: 5555555555, rating: 4.7 },
];
const roomRows = [
    { id: 1, name: 'Room 101', type: 'Standard', bedType: 'Single', bedQuantity: 2, basePrice: 100 },
    { id: 2, name: 'Room 102', type: 'Deluxe', bedType: 'Double', bedQuantity: 2, basePrice: 150 },
    { id: 3, name: 'Room 103', type: 'Suite', bedType: 'King', bedQuantity: 1, basePrice: 200 },
    { id: 4, name: 'Room 201', type: 'Standard', bedType: 'Single', bedQuantity: 2, basePrice: 100 },
    { id: 5, name: 'Room 202', type: 'Deluxe', bedType: 'Double', bedQuantity: 2, basePrice: 150 },
    { id: 6, name: 'Room 203', type: 'Suite', bedType: 'King', bedQuantity: 1, basePrice: 200 },
    { id: 7, name: 'Room 301', type: 'Standard', bedType: 'Single', bedQuantity: 2, basePrice: 100 },
    { id: 8, name: 'Room 302', type: 'Deluxe', bedType: 'Double', bedQuantity: 2, basePrice: 150 },
    { id: 9, name: 'Room 303', type: 'Suite', bedType: 'King', bedQuantity: 1, basePrice: 200 },
];
const amenitiesData = {
    instructional: "Please enjoy the following amenities during your stay:",
    mostRequestedByGuests: [
        "Free Wi-Fi",
        "Complimentary Breakfast",
        "Swimming Pool",
        "Fitness Center",
        "Spa Services",
        "Airport Shuttle",
    ],
};
const policiesData = {
    cancellations: {
        cancelFreeDays: 7,
        penaltyPercentage: 20,
        protectAgainstAccidentalBookings: true,
    },
    checkInTime: "14:00", // Example check-in time
    checkOutTime: "12:00", // Example check-out time
    accommodateChildren: true,
    allowPets: "Small pets allowed", // Example pet policy
    petCharges: "Additional charges may apply", // Example pet charges
};
import './ProfileCard.css'; // Create a CSS file for styling
import { useState } from 'react';
import { width } from 'dom7';

const Table = () => {
    const [isPopupOpen, setISPopupOpen] = useState(false);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'hotelname', headerName: 'Hotel Name', width: 150,
        },
        {
            field: 'hoteltype', headerName: 'Hotel type', width: 150,
        },
        {
            field: 'city', headerName: 'City', width: 150,
        },
        {
            field: 'contactnumber', headerName: 'Contact Number', type: 'number', width: 110,
        },
        {
            field: 'rating', headerName: 'Rating', type: 'number', width: 110,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <IconButton
                        aria-label="view"
                        onClick={() => handleViewClick(params.row.id)}
                    >
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton
                        aria-label="edit"
                        onClick={() => handleEditClick(params.row.id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteClick(params.row.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];
    const data = {
        basicInfo: {
            propertyType: "Luxury Hotel",
            propertyName: "Grand Hotel",
            starRating: 5,
        },
        contactDetails: {
            additionalContacts: [
                {
                    title: "Manager",
                    contactName: "Jane Doe",
                    phoneNumber: "+123456789",
                    altPhoneNumber: "+987654321",
                    email: "jane.doe@example.com",
                }
            ],
            socialAccLink: "linkedin.com/johndoe",
            ownMultipleHotels: false,
        },
        propertyLocation: {
            countryRegion: "United States",
            district: "California",
            city: "San Francisco",
            address: "123 Main Street",
            postCode: 12345,
        },
        roomDetails: [
            {
                roomType: "Standard",
                roomName: "Standard Room",
                numberOfRooms: 10,
                bedType: "Queen",
                bedQuantity: 1,
                maxGuests: 2,
                roomSize: 30,
                basePricePerNight: 1000,
                offerLowerRate: true,
                discountAmount: 10, // Percentage
                minOccupancyForDiscount: 4,
                roomPhoto: ["room1.jpg", "room2.jpg"],
            },
            // Add more rooms as needed
        ],
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
            instructional: "Please contact front desk for additional amenities.",
            mostRequestedByGuests: ["Free WiFi", "Swimming Pool", "Gym"],
        },
        propertyPhotos: ["exterior.jpg", "lobby.jpg", "pool.jpg"],
        policies: {
            cancellations: {
                cancelFreeDays: 7,
                penaltyPercentage: 20,
                protectAgainstAccidentalBookings: true,
            },
            checkInTime: "3:00 PM",
            checkOutTime: "11:00 AM",
            accommodateChildren: true,
            allowPets: "Yes",
            petCharges: "$50 per night",
        }
    };
    const handleViewClick = (id) => {

        setISPopupOpen(true);
        console.log("popup vlaue", isPopupOpen);
    };

    const handleEditClick = (id) => {
        // Add logic to navigate to edit page
    };

    const handleDeleteClick = (id) => {
        
    };
    return (
        <>
            <Container>
                <DataGrid

                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Container>
            <Container>


                <Dialog open={isPopupOpen} onClose={() => setISPopupOpen(false) } maxWidth='lg' fullWidth>
                    <DialogTitle style={{ textAlign: 'center' }}>
                        Details
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div className="gradient-custom-2">
                                <Container className="py-5 h-100">

                                    <Grid container justifyContent="center" alignItems="center" className="h-100">
                                        <Grid item xs={11} lg={10} xl={9}>
                                            <Card spacing={2}>

                                                <div className="rounded-top text-white d-flex flex-row" sx={{ backgroundColor: '#000', height: '200px' }}>

                                                </div>

                                                <CardContent>
                                                    <div className="name" >
                                                        <div className="ms-3" sx={{ marginTop: '20px' }}>
                                                            <Typography variant="h2">Hotel Name</Typography>
                                                            <Typography variant="h5">Hotel Type</Typography>
                                                        </div>
                                                        <div className="ms-3" style={{ marginTop: '20px', alignItems: 'flex-end', marginRight: '40px' }}>
                                                            <Typography variant='h3'>4.9</Typography>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                                <CardContent className="p-4 text-black rounded-3 mb-4" sx={{ margin: '10px', backgroundColor: '#f8f9fa' }}>
                                                    <div className="py-1">
                                                        <div>
                                                            <Typography variant="h4" className="mb-4">city</Typography>                                            </div>
                                                        <div className="px-3">
                                                            <Typography variant="h5" className="mb-1">Address Line:street address</Typography>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                                <CardContent className=" rounded-3 mb-4 text-black p-4" sx={{ margin: '10px' }}>
                                                    <div className="mb-5">
                                                        <Typography variant="h4" className="fw-normal mb-1">Contact</Typography>
                                                        <div className="p-4" sx={{ backgroundColor: '#f8f9fa' }}>
                                                            <Typography variant="body1" className="font-italic mb-1">Name : Number , Alt-Number</Typography>
                                                            <Typography variant="body1" className="font-italic mb-1">Email: abc@xyz.com</Typography>
                                                        </div>
                                                        <Typography variant="body1" className="font-italic mb-0">Social-Link: Link </Typography>
                                                    </div>
                                                </CardContent>
                                                <CardContent className=" rounded-3 mb-4 text-black p-4" sx={{ margin: '10px' }}>
                                                    <div style={{ height: 400, width: '100%' }}>
                                                        <DataGrid
                                                            rows={roomRows}
                                                            columns={roomColumns}
                                                            initialState={{
                                                                pagination: {
                                                                    paginationModel: {
                                                                        pageSize: 5,
                                                                    },
                                                                },
                                                            }}
                                                            pageSizeOptions={[5, 10, 20]}
                                                            checkboxSelection
                                                            disableRowSelectionOnClick
                                                        />
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <Typography variant="h6" className="fw-normal mb-0">Recent photos</Typography>
                                                        {/* <Typography variant="body1" className="mb-0"><a href="#!" className="text-muted">Show all</a></Typography> */}
                                                    </div>

                                                    <Grid container spacing={2} className='mb-4'>
                                                        <Grid item xs={6} md={6} lg={6} xl={6}>
                                                            <CardMedia
                                                                component="img"
                                                                alt="Image 1"
                                                                height="200"
                                                                image="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                                className="w-100 rounded-3"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6} md={6} lg={6} xl={6}>
                                                            <CardMedia
                                                                component="img"
                                                                alt="Image 2"
                                                                height="200"
                                                                image="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                                className="w-100 rounded-3"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6} md={6} lg={6} xl={6}>
                                                            <CardMedia
                                                                component="img"
                                                                alt="Image 3"
                                                                height="200"
                                                                image="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                                className="w-100 rounded-3"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6} md={6} lg={6} xl={6}>
                                                            <CardMedia
                                                                component="img"
                                                                alt="Image 4"
                                                                height="200"
                                                                image="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                                className="w-100 rounded-3"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                                <CardContent className=" rounded-3 mb-4 text-black p-4" sx={{ margin: '10px' }}>
                                                    <div className="px-3">
                                                        <Typography variant="h5" className="mb-1">{amenitiesData.instructional}</Typography>
                                                    </div>
                                                    <div>
                                                        <ul>
                                                            {amenitiesData.mostRequestedByGuests.map((items, index) => (
                                                                <li key={index}>
                                                                    {items}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                                <CardContent className=" rounded-3 mb-4 text-black p-4" sx={{ margin: '10px' }}>
                                                    <div>
                                                        <h2>Policies</h2>
                                                        <ul>
                                                            <li>
                                                                <strong>Cancellation Policy:</strong>
                                                                <ul>
                                                                    <li>Free cancellation up to {policiesData.cancellations.cancelFreeDays} days prior to arrival.</li>
                                                                    <li>{policiesData.cancellations.penaltyPercentage}% penalty for late cancellations.</li>
                                                                    <li>{policiesData.cancellations.protectAgainstAccidentalBookings ? "Protection against accidental bookings." : "No protection against accidental bookings."}</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <strong>Check-In Time:</strong> {policiesData.checkInTime}
                                                            </li>
                                                            <li>
                                                                <strong>Check-Out Time:</strong> {policiesData.checkOutTime}
                                                            </li>
                                                            <li>
                                                                <strong>Accommodate Children:</strong> {policiesData.accommodateChildren ? "Yes" : "No"}
                                                            </li>
                                                            <li>
                                                                <strong>Allow Pets:</strong> {policiesData.allowPets}
                                                            </li>
                                                            <li>
                                                                <strong>Pet Charges:</strong> {policiesData.petCharges}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div >
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setISPopupOpen(false)} color="primary" variant="contained">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container >
        </>
    )
}

export default Table