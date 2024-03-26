// controllers/driverController.js
import Driver from '../../Models/driverListing.js';

// Create (POST)
export const createDriver = async (req, res) => {
  try {
    const newDriver = new Driver(req.body);
    console.log("data", newDriver)
    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read All (GET)
export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read by ID (GET)
export const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update (PUT)
export const updateDriver = async (req, res) => {
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(updatedDriver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete (DELETE)
export const deleteDriver = async (req, res) => {
  try {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
    if (!deletedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(deletedDriver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
