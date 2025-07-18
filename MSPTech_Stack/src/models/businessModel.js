import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  model: {
    type: String,
    default: null, // Example of setting a default value
  },
  classification: {
    type: String,
    required: true,
  },
});

const BusinessModel =
  mongoose.models.Business_Model ||
  mongoose.model("Business_Model", businessSchema);

export default BusinessModel;
