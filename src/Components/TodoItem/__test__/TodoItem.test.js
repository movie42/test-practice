import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";

describe("Todo Item", () => {
  const mockupTodo = {
    id: 1,
    text: "달리기",
    done: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: mockupTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const { getByText } = utils;
    const todo = props.todo || initialProps.todo;
    const span = getByText(todo.text);
    const button = getByText("삭제");
    return {
      ...utils,
      span,
      button,
    };
  };

  it("삭제 버튼과 span이 있어야 합니다.", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("done이 true일 때, span 스타일에 line-through가 있어야 합니다.", () => {
    const { span } = setup({ todo: { ...mockupTodo, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });

  it("done이 false일 때,span 스타일에 line-through가 없어야 합니다.", () => {
    const { span } = setup({ todo: { ...mockupTodo } });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  it("onToggle 테스트", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(mockupTodo.id);
  });

  it("onRemove 테스트", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(mockupTodo.id);
  });
});
