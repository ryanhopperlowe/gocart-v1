import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const connectDB = async () => {
  if (!process.env.MONGO_DB_URL) {
    throw new Error("Add Mongo URI to .env.local");
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URL);
    if (!connection) {
      throw new Error("Error connecting to MongoDB");
    }
    return connection;
  } catch (error) {
    console.log(error);
  }
};

// not sure which of these is better. Leaning towards whenConnected

export const dbEndpoint = <T>(
  cb: (req: NextRequest) => Promise<NextResponse<T>>
) => {
  return async (req: NextRequest) => {
    try {
      const connection = await connectDB();

      const result = await cb(req);

      await connection?.disconnect();
      return result;
    } catch (error) {
      console.error(error);
      return new NextResponse("DB Error", { status: 500 });
    }
  };
};

export const whenConnected = async <T>(cb: () => Promise<T>) => {
  try {
    const connection = await connectDB();
    const result = await cb();
    await connection?.disconnect();
    return result;
  } catch (error) {
    console.error(error);
    return new NextResponse("DB Error", { status: 500 });
  }
};
