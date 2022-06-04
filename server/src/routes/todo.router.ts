import express from "express";
import {
  getTodoList,
  postTodo,
  getTodo,
  patchTodo,
  deleteTodo
} from "../controllers/todo.controllers";
import Todo from "../schema/todo.schema";

const todoRouter = express.Router();

todoRouter.route("/").get(getTodoList).post(postTodo);
todoRouter
  .route("/:id([0-9a-z]{24})")
  .get(getTodo)
  .patch(patchTodo)
  .delete(deleteTodo);

export default todoRouter;
