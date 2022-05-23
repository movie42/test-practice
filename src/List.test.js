import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("render tasks", () => {
    const tasks = [
      { id: 1, title: "아무일도 하기 싫다." },
      { id: 2, title: "집에서 놀기" }
    ];
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent("아무일도 하기 싫다.");
    expect(container).toHaveTextContent("집에서 놀기");
  });
});
