import mongoose from "mongoose";
export  async function DbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI!).then((res) => {
        console.log("Connected" , res)
    }).catch((error) => {
        console.log("Error ::: " , error)
    });
  
    // const connection =  mongoose.connection;
    // connection.on("connected", () => {
    //     console.log("MongoDB Connected Successfully");
    // });
    // console.log("Connecting to MongoDB ...... ")

    // connection.on("error", (error) => {
    //   console.log("MongoDB Connection Error: ", error);
    //   process.exit();
    // });
  } catch (error) {
    console.log(error);
}
}