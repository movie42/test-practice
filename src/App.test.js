import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("숫자 0이 표시되어야합니다.", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("0");
  });

  it("+ 버튼을 누르면 숫자가 증가해야합니다.", () => {
    const { container, getByRole } = render(<App />);
    const increaseButton = getByRole("button", { name: "+" });
    fireEvent.click(increaseButton);
    expect(container).toHaveTextContent(1);
  });

  it("- 버튼을 누르면 숫자가 감소해야합니다.", () => {
    const { container, getByRole } = render(<App />);
    const increaseButton = getByRole("button", { name: "+" });
    const decreaseButton = getByRole("button", { name: "-" });
    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);
    expect(container).toHaveTextContent(0);
  });
});
