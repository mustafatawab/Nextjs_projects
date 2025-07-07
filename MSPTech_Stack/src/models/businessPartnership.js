import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  adminFirstName: String,
  adminLastName: String,
  adminEmail: String,
  adminAccountTitle: String,
  adminPhone: String,
  agree: String,
  go : {
    listned : String,
    time : String,
    day : String,
  }
});

const BusinessPartnership =
  mongoose.models.Business_Partnership ||
  mongoose.model("Business_Partnership", businessSchema);

export default BusinessPartnership;
