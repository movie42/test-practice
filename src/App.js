import React, { useCallback, useRef, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const newId = useRef(3);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "달리기",
      done: false,
    },
    {
      id: 2,
      text: "커피 마시기",
      done: false,
    },
  ]);

  const onInsert = useCallback((text) => {
    setTodos((todos) => [...todos, { id: newId.current, text, done: false }]);
    newId.current += 1;
  }, []);

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
    <div>
      <TodoForm onInsert={onInsert} />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
    </div>
  );
};

export default App;
