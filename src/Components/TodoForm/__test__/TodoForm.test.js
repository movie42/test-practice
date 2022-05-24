import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import TodoForm from "../TodoForm";

describe("Todo Form", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("무엇을 해야하나?");
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button,
    };
  };

  it("등록 버튼이 있어야합니다.", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("change input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "달리기" } });
    expect(input).toHaveAttribute("value", "달리기");
  });

  it("onInsert 호출하고 input 초기화", () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    fireEvent.change(input, { target: { value: "달리기" } });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith("달리기");
    expect(input).toHaveAttribute("value", "");
  });
});
