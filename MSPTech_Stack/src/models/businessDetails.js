import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  numberOfEmploye: String,
  numberOfClients: String,
  focus: String,
  endpoints: String,
  phoneNumber: String,
  msCompetency: String,
  interest: String,
  psaTool: String,
});

const BusinessDetails =
  mongoose.models.Business_Details ||
  mongoose.model("Business_Details", businessSchema);

export default BusinessDetails;
