import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import db from "./db";

const PORT = process.env.PORT || 3300;

db.on("error", console.error.bind(console, "connection error: "));
db.once("connect", () => console.log("connect db"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
