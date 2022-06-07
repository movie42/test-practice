import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string);

const db = mongoose.connection;

export default db;
