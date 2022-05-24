import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;

  return (
    <li>
      <span
        onClick={() => onToggle(id)}
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        {text}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
