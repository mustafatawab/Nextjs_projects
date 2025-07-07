import mongoose from "mongoose";
export async function Connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

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
