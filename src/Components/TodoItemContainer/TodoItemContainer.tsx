import React from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../../atom/TodoState";
import { ToDo } from "../../lib/interface/todoInterface";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoItemContainerProps {}

const TodoItemContainer = () => {
  const [todos, setTodos] = useRecoilState(todoState);

  const handleRemoveItem = (id: ToDo["id"]) => {
    setTodos((pre) => pre.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

export default TodoItemContainer;
