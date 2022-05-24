import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ onToggle, onRemove, todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
