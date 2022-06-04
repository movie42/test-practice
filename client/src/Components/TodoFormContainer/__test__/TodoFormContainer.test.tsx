import { fireEvent, render } from "@testing-library/react";
import TodoFormContainer from "../TodoFormContainer";
import { RecoilRoot } from "recoil";

const MockingTodoFormContainer = () => {
  return (
    <RecoilRoot>
      <TodoFormContainer />
    </RecoilRoot>
  );
};

describe("TodoFormContainer", () => {
  const setup = () => {
    const method = render(<MockingTodoFormContainer />);
    const input = method.getByPlaceholderText(
      "할 일을 적어보세요."
    ) as HTMLInputElement;
    const submitButton = method.getByText("제출") as HTMLButtonElement;

    return { ...method, input, submitButton };
  };

  it("TodoFormContainer에는 input, button이 있어야합니다.", () => {
    const { input, submitButton } = setup();
    expect(input).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it("handleChange 함수 테스트", () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: "달리기" } });
    expect(input).toHaveAttribute("value", "달리기");
  });

  it("addTodo 함수 테스트", () => {
    const { input, submitButton } = setup();

    fireEvent.change(input, { target: { value: "달리기" } });
    fireEvent.submit(submitButton);
    expect(input).toHaveAttribute("value", "");
  });
});
