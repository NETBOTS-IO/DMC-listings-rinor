export const addProperty = async (req, res, next) => {
  try {
    uploadImages.array("hotelPhotos", 10)(req, res, async (err) => {
      if (err) {
        return next(createError(400, "Failed to upload hotel photos", err));
      }

      const hotelPhotos = req.files
        .filter((file) => file.hotelPhotos === "hotelPhotos")
        .map((file) => file.path);

      uploadImages.array("roomPhotos", 5)(req, res, async (err) => {
        if (err) {
          return next(createError(400, "Failed to upload room photos", err));
        }

        const roomPhotos = req.files
          .filter((file) => file.roomPhotos === "roomPhotos")
          .map((file) => file.path);

            const property = new Property({
              ...req.body,
             hotelPhotos,
             roomDetails: req.body.roomDetails.map((room, index) => ({
               ...room,
              roomPhotos: roomPhotos[index] || [],
            })),
         });
           await property.save();
        res.status(201).json({ hotelPhotos, roomPhotos });
      });
    });
  } catch (error) {
    next(createError(500, "Failed to Add property", error));
  }
};



  uploadImages.fields([
      { name: "hotelPhotos", maxCount: 9 },
      { name: "roomPhotos", maxCount: 10 },
    ])(req, res, async (err) => {
      if (err) {
        return next(createError(400, "Failed to upload photos", err));
      }

      const hotelPhotos = req.files["hotelPhotos"].map((file) => file.path);
      const roomPhotos = req.files["roomPhotos"].map((file) => file.path);
      const data = req.body;
      res.status(201).json({ data, hotelPhotos, roomPhotos });
    });


 // Parse the form data and group fields dynamically
    const fieldConfigurations = [{ name: "hotelPhotos", maxCount: 9 }];

    const roomDetailsFields = Object.keys(req.body).filter((field) =>
      field.startsWith("roomDetails")
    );

    console.log("Passed Check 1");
    console.log("roomDetailsFields", roomDetailsFields);

    roomDetailsFields.forEach((field) => {
      const roomPhotosField = `${field}[roomPhotos]`;
      if (req.files[roomPhotosField]) {
        fieldConfigurations.push({
          name: roomPhotosField,
          maxCount: maxRoomPhotos,
        });
      }
    });


console.log("Passed Check 2");
    console.log("roomPhotosField", roomPhotosField);

    // Pass the field configurations to Multer
    uploadImages.fields(fieldConfigurations)(req, res, async (err) => {
      if (err) {
        return next(createError(400, "Failed to upload photos", err));
      }

      // Now you can handle the uploaded files dynamically as before
      const hotelPhotos = req.files["hotelPhotos"].map((file) => file.path);
      const roomPhotos = [];

      roomDetailsFields.forEach((field) => {
        const roomPhotosField = `${field}[roomPhotos]`;
        if (req.files[roomPhotosField]) {
          roomPhotos.push(req.files[roomPhotosField].map((file) => file.path));
        }
      });

      console.log("Passed Check 3");

      console.log("roomPhotos", roomPhotos);

      const data = req.body;
      res.status(201).json({ data, hotelPhotos, roomPhotos });
    });
