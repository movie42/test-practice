import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "../TodoForm";

describe("Todo Form", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByPlaceholderText, getByText } = utils;
    const input = getByPlaceholderText("무엇을 할까?");
    const button = getByText("등록");
    return { ...utils, input, button };
  };

  it("input과 button이 있어야 합니다.", () => {
    const { button, input } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("onChange input 테스트", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "커피 마시기" } });
    expect(input).toHaveAttribute("value", "커피 마시기");
  });

  it("onSubmit 테스트", () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });
    fireEvent.change(input, { target: { value: "커피 마시기" } });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("커피 마시기");
    expect(input).toHaveAttribute("value", "");
  });
});
