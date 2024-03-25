import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth.routes.js";
import propertyRoute from "./Routes/property.routes.js";
import driverRoute from "./Routes/driver.routes.js";
import vehicleRoute from "./Routes/vehicle.routes.js";


const app = express();

dotenv.config();

//middlewares
// "http://127.0.0.1:5173", "http://localhost:5173", 
app.use(cors(
  {
    // origin: ["http://localhost:5173", "https://dmc-listings-rinor.vercel.app"],
    // methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
  }
));

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));

app.use("/api/auth", authRoute);
app.use("/api/property", propertyRoute);
app.use("/api/driver", driverRoute);
app.use("/api/vehicle", vehicleRoute);


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.");
  } catch {
    console.log("Connection Error");
  }
};

mongoose.connection.on("disconnected", () => {
  res.send("MongoDB Disconnected!")
  console.log("MongoDB Disconnected!");
});

app.get("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  // res.setHeader("Access-Control-Allow-Headers", "content-type");
  // res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.send("Hello From Backend");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log(`Server Listen on port ${port}`);
  console.log("Connected to backend.");
});
