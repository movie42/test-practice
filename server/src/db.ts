import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string);

export const db = mongoose.connection;
