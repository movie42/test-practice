import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render tasks", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("아무일도 하기 싫다.");
  });
});
