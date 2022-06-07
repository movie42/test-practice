import React, { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { fetchTodo, todoState } from "../../recoil/atoms/TodoState";
import { ToDo } from "../../lib/interface/todoInterface";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoItemContainerProps {}

const TodoItemContainer = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const getTodo = useRecoilValueLoadable(fetchTodo);

  const handleRemoveItem = (id: ToDo["_id"]) => {
    setTodos((pre) => pre.filter((item) => item._id !== id));
  };

  useEffect(() => {
    if (getTodo.state === "hasValue") {
      const { todoList } = getTodo.contents;
      setTodos(todoList);
    }
  }, [getTodo]);

  return (
    <ul data-testid="todo-list-container">
      {todos?.map((todo) => (
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
