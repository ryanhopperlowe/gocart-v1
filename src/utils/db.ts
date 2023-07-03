import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGO_DB_URL) {
    throw new Error("Add Mongo URI to .env.local");
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
  } catch (error) {
    console.log(error);
  }
};
