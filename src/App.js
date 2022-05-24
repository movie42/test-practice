import React, { useCallback, useRef, useState } from "react";

import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(3);

  const onInsert = useCallback((text) => {
    setTodos((pre) => [...pre, { id: nextId.current, text, done: false }]);
    nextId.current += 1;
  });

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} data-testid="todo-form" />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
    </>
  );
};

export default App;
