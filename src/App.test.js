import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const addTodo = (textList) => {
    const { getByText, getByPlaceholderText } = render(<App />);

    textList.forEach((text) => {
      fireEvent.change(getByPlaceholderText("무엇을 해야하나?"), {
        target: { value: text },
      });
      fireEvent.click(getByText("등록"));
    });

    return {
      getByText,
      getByPlaceholderText,
    };
  };

  it("TodoList, TodoForm 랜더링", () => {
    const { getByText, getByTestId } = render(<App />);
    getByText("등록");
    getByTestId("TodoList");
  });

  it("render two default todos", () => {
    const { getByText } = addTodo(["달리기", "잠자기"]);
    getByText("달리기");
    getByText("잠자기");
  });

  it("새로운 todo 만들기", () => {
    const { getByText } = addTodo(["커피 마시기"]);
    getByText("커피 마시기");
  });

  it("todo 토글(onToggle)", () => {
    const { getByText } = addTodo(["달리기"]);

    const todoText = getByText("달리기");
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });

  it("todo 삭제(onRemove)", () => {
    const { getByText } = addTodo(["달리기"]);

    const todoText = getByText("달리기");
    const removeButton = todoText.nextSibling;
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
