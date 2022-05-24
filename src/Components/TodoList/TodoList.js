import React, { useMemo } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;