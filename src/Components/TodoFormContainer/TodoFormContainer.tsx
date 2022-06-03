import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../../atom/todoState";
import { TodoState } from "../../lib/interface/todoInterface";

interface ITodoFormContainerProps {}

const TodoProFormContainer = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = String(new Date());
    setTodos((pre) => [...pre, { id, name: todo, state: TodoState.TODO }]);
    setTodo("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setTodo(value);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할 일을 적어보세요."
          onChange={handleChange}
          value={todo}
        />
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoProFormContainer;
