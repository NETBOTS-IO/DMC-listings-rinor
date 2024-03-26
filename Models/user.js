import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // role: {
    //   type: String,
    //   enum: ["admin", "employee", "client", "partner"],
    //   default: "client",
    // },
    // address: {
    //   type: String,
    // },
    // phoneNumber: {
    //   type: String,
    // },
    // dateOfBirth: {
    //   type: Date,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
