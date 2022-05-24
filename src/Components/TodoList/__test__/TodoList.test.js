import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

describe("Todo List", () => {
  const mockupTodos = [
    {
      id: 1,
      text: "달리기",
      done: true,
    },
    {
      id: 2,
      text: "잠자기",
      done: true,
    },
  ];

  it("todos 랜더링하기", () => {
    const { getByText } = render(<TodoList todos={mockupTodos} />);
    getByText(mockupTodos[0].text);
    getByText(mockupTodos[1].text);
  });

  it("onToggle and onRemove 함수 호출", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();

    const { getByText, getAllByText } = render(
      <TodoList todos={mockupTodos} onToggle={onToggle} onRemove={onRemove} />,
    );

    fireEvent.click(getByText(mockupTodos[0].text));
    expect(onToggle).toBeCalledWith(mockupTodos[0].id);

    fireEvent.click(getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(mockupTodos[0].id);
  });
});
