import mongoose from "mongoose";

const demoSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  e_mail: String,
  phone: String,
  courtry: String,
});

const DemoModel = mongoose.models.Demo || mongoose.model("Demo", demoSchema);
export default DemoModel;
