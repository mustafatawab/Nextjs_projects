import mongoose from "mongoose";
export  async function DbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
  
    const connection = await mongoose.connection;
    console.log("Connecting to MongoDB ...... ")
    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (error) => {
      console.log("MongoDB Connection Error: ", error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
}
}