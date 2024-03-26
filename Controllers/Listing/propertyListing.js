import Property from "../../Models/propertyListing.js";
import { createError } from "../../Utils/Error.js";
export const addProperty = async (req, res, next) => {
  try {
    // console.log("Data", req.body)

    const propertyData = new Property(req.body);
    // console.log("productData", propertyData);

    await propertyData.save();
    res.status(200).json({
      message: "Property Successfully Added",
      propertyData,
    });

  } catch (error) {
    next(createError(500, "Failed to Add property", error));
  }
};

export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.propertyId);
    if (!property) {
      return next(createError(404, "Property not found"));
    }
    res.status(200).json({ property });
  } catch (error) {
    next(createError(500, "Failed to fetch property", error));
  }
};

export const updateProperty = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.propertyId,
      req.body,
      {
        new: true,
      }
    );
    if (!property) {
      return next(createError(404, "Property not found"));
    }
    res.status(200).json({ property });
  } catch (error) {
    next(createError(500, "Failed to update property", error));
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndRemove(req.params.propertyId);
    if (!property) {
      return next(createError(404, "Property not found"));
    }
    res.status(200).json({ message: "Property deleted" });
  } catch (error) {
    next(createError(500, "Failed to delete property", error));
  }
};

export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();
    res.status(200).json({ properties });
  } catch (error) {
    next(createError(500, "Failed to fetch properties", error));
  }
};
