// controllers/vehicleController.js
import VehicleModel from '../../Models/vehicleListing.js';

// Create (POST)
export const createVehicle = async (req, res) => {
  try {
    const vehicle = new VehicleModel(req.body);
    console.log("data", vehicle)
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Read (GET all)
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await VehicleModel.find();
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Read (GET by ID)
export const getVehicleById = async (req, res) => {
  try {
    const vehicle = await VehicleModel.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update (PUT)
export const updateVehicle = async (req, res) => {
  try {
    const vehicle = await VehicleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete (DELETE)
export const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await VehicleModel.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
