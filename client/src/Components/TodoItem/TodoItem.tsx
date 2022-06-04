import React from "react";
import { ToDo } from "../../lib/interface/todoInterface";

interface ITodoItemProps {
  todo: ToDo;
  handleRemoveItem: (id: ToDo["_id"]) => void;
}

const TodoItem = ({ todo, handleRemoveItem }: ITodoItemProps) => {
  return (
    <li>
      <span>{todo.title}</span>{" "}
      <button onClick={() => handleRemoveItem(todo._id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
