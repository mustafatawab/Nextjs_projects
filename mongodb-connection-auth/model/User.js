// models/Item.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true , "Please provide your name"],
  },
  email : {
    type : String,
    required : [true , "please provide your email"],
    unique : true
  },

  password : {
    type : String,
    required : [true , "Please provide your password"]
  }
});

export default mongoose.models.users || mongoose.model('users', userSchema);