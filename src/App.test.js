import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("TodoList와 TodoForm이 랜더링 되어야합니다.", () => {
    const { getByText, getByTestId } = render(<App />);
    getByText("등록");
    getByTestId("TodoList");
  });

  it("기본 할 일 목록 두 개를 출력해야합니다.", () => {
    const { getByText } = render(<App />);
    getByText("달리기");
    getByText("커피 마시기");
  });

  it("할 일 추가 테스트", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.change(getByPlaceholderText("무엇을 할까?"), {
      target: { value: "집에 가기" },
    });
    fireEvent.click(getByText("등록"));
    getByText("집에 가기");
  });

  it("onToggle 테스트", () => {
    const { getByText } = render(<App />);
    const todoText = getByText("달리기");
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });

  it("onRemove 테스트", () => {
    const { getByText } = render(<App />);
    const todoText = getByText("달리기");
    fireEvent.click(todoText.nextSibling);
    expect(todoText).not.toBeInTheDocument();
  });
});
