import express from "express";
import {
  addProperty,
  updateProperty,
  deleteProperty,
  getProperty,
  getAllProperties,
} from "../Controllers/Listing/propertyListing.js";
import upload from "../Utils/Multer.js";
import verifyUser from "../Utils/verifyUser.js";
const router = express.Router();
const subFolder = "Accommodations";


router.post("/properties",verifyUser, addProperty);

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
router.get("/properties", getAllProperties);
router.get("/properties/:propertyId", getProperty);
router.put("/properties/:propertyId", updateProperty);
router.delete("/properties/:propertyId", deleteProperty);

export default router;
