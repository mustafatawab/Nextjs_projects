import mongoose from "mongoose";

const marketplaceSchema = mongoose.Schema({
    CompanyName: String,
    CompanyWebsite: String,
    name: String,
    email: String,
    job: String,
    country: String,
    preferredPerson: {
        type : String,
        default : "No"
    },
});

const MartkeplaceJoiningModel =
  mongoose.models.JoiningMarketplace ||
  mongoose.model("Join Marketplace", marketplaceSchema);

export default MartkeplaceJoiningModel
