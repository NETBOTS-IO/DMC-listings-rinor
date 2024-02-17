import express from 'express';
import {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
} from '../Controllers/Listing/driverListing.js ';
import upload from '../Utils/Multer.js';
import verifyUser from '../Utils/verifyUser.js';


const router = express.Router();
// uploads
router.post("/files", upload.array('files', 12), function (req, res, next) {
    try{
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('file upload failed');
      }
  
    return res.status(200).json({ message: 'File uploaded successfully!' });
    }
    catch(error){
      return res.status(500).json({message:error.message})
    }
  });
// Create (POST)
router.post('/drivers',verifyUser, createDriver);

// Read (GET all)
router.get('/drivers', getDrivers);

// Read (GET by ID)
router.get('/drivers/:id', getDriverById);

// Update (PUT)
router.put('/drivers/:id', updateDriver);

// Delete (DELETE)
router.delete('/drivers/:id', deleteDriver);

export default router;
