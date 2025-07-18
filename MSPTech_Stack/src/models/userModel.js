import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: "string",
    required: [true, "Provide Fullname"],
  },

  email: {
    type: "string",
    required: [true, "Please Provide a Email"],
    unique: true,
  },

  username: {
    type: "string",
    required: [true, "Please Provide a Username"],
    unique: true,
  },

  password: {
    type: "string",
    required: [true, "Please Provide a Password"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
