import express from "express";
import todoRouter from "./todo.router";

const apiRouter = express.Router();

apiRouter.use("/todo", todoRouter);

export default apiRouter;
