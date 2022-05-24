import { fireEvent, render } from "@testing-library/react";
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  const mockItem = {
    id: 1,
    text: "달리기",
    done: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: mockItem };
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

  it("span과 button이 있어야합니다.", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("done의 값이 true라면 취소선이 그어져야합니다.", () => {
    const { span } = setup({ todo: { ...mockItem, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });

  it("done의 값이 false라면 취소선이 없어야 합니다.", () => {
    const { span } = setup({ todo: { ...mockItem, done: false } });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  it("onToggle을 호출.", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(mockItem.id);
  });

  it("onRemove 함수를 호출.", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(mockItem.id);
  });
});
