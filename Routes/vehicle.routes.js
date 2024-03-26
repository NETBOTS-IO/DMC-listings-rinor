// routes/vehicleRoutes.js
import express from 'express';
import {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} from '../Controllers/Listing/vehicleListing.js';
import upload from '../Utils/Multer.js';
import verifyUser from '../Utils/verifyUser.js';

const router = express.Router();
// uploads
router.post("/files", upload.array('files', 12), function (req, res, next) {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('file upload failed');
    }

    return res.status(200).json({ message: 'File uploaded successfully!' });
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
});

// Create (POST)
router.post('/vehicles', verifyUser, createVehicle);

// Read (GET all)
router.get('/vehicles', getVehicles);

// Read (GET by ID)
router.get('/vehicles/:id', getVehicleById);

// Update (PUT)
router.put('/vehicles/:id', updateVehicle);

// Delete (DELETE)
router.delete('/vehicles/:id', deleteVehicle);

export default router;
