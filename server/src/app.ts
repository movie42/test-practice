import express, { Request, Response } from "express";
import apiRouter from "./routes/api.router";
import Todo from "./schema/todo.schema";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

export default app;
