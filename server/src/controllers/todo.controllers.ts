import { Request, Response } from "express";
import Todo from "../schema/todo.schema";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todoList = await Todo.find();
    return res.status(200).json({ todoList });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const postTodo = async (req: Request, res: Response) => {
  const {
    body: { title, desc, start, end }
  } = req;
  try {
    const newTodo = await Todo.create({
      title,
      desc,
      start,
      end
    });
    return res.status(200).json({ newTodo });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const getTodo = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;

  try {
    const findTodo = await Todo.findById(id);

    return res.status(200).json({ findTodo });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const patchTodo = async (req: Request, res: Response) => {
  const {
    params: { id },
    body: { title, desc, start, end, state }
  } = req;

  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        desc,
        start,
        end,
        state
      }
    );

    return res.status(200).json({ updateTodo });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
export const deleteTodo = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;

  try {
    await Todo.findByIdAndDelete(id);

    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
