import mongoose from "mongoose";


export async function DbConnection() {
  try {
    console.log("Connecting to MongoDB ......");
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}
