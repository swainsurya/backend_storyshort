import mongoose from "mongoose";

export const dbConnection = async() => {
    await mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB CONNECTION SUCCESS"))
    .catch((err) => console.log("DB CONNECTION ERROR ",err))
}