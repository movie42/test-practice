import React from "react";
import { ToDo } from "../../lib/interface/todoInterface";

interface ITodoItemProps {
  todo: ToDo;
  handleRemoveItem: (id: ToDo["id"]) => void;
}

const TodoItem = ({ todo, handleRemoveItem }: ITodoItemProps) => {
  return (
    <li>
      <span>{todo.name}</span>{" "}
      <button onClick={() => handleRemoveItem(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
