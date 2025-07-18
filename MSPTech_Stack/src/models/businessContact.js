import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please enter a company name"],
  },
  businessEmail: {
    type: String,
    required: [true, "Please enter a business email"],
    unique: true,
  },
  domain: {
    type: String,
    required: [true, "Please enter a domain"],
    unique: true,
  },
  partof_franchise: {
    type: String,
    required: false,
  },
  country: String,
  city: String,
  state: String,
  postalCode: String,
  currency: String,
  headquater_address: {
    type: String,
    required: false,
  },
  phoneNumber: String,
});

const BusinessContact =
  mongoose.models.Business_Contact ||
  mongoose.model("Business Contact", businessSchema);

export default BusinessContact;
