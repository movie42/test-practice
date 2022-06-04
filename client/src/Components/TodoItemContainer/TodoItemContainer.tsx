import React from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../../recoil/atoms/TodoState";
import { ToDo } from "../../lib/interface/todoInterface";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoItemContainerProps {}

const TodoItemContainer = () => {
  const [todos, setTodos] = useRecoilState(todoState);

  const handleRemoveItem = (id: ToDo["_id"]) => {
    setTodos((pre) => pre.filter((item) => item._id !== id));
  };

  return (
    <ul data-testid="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

export default TodoItemContainer;
