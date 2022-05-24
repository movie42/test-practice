import { fireEvent, render, screen } from "@testing-library/react";

import TodoList from "../TodoList";

describe("TodoList", () => {
  const mockupList = [
    {
      id: 1,
      text: "달리기",
      done: true,
    },
    {
      id: 2,
      text: "커피 마시기",
      done: true,
    },
  ];

  it("todos property가 있어야 합니다.", () => {
    const { getByText } = render(<TodoList todos={mockupList} />);
    getByText(mockupList[0].text);
    getByText(mockupList[1].text);
  });

  it("onToggle, onRemove 테스트", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={mockupList} onRemove={onRemove} onToggle={onToggle} />,
    );

    fireEvent.click(getByText(mockupList[0].text));
    expect(onToggle).toBeCalledWith(mockupList[0].id);

    fireEvent.click(getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(mockupList[0].id);
  });
});
