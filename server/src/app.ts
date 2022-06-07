import express, { Request, Response } from "express";
import apiRouter from "./routes/api.router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

export default app;
