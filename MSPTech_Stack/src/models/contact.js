import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const ContactModel =
  mongoose.models.Contact_Us || mongoose.model("Contact Us", contactSchema);
export default ContactModel;
