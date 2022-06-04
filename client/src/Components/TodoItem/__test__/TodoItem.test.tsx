import { fireEvent, render } from "@testing-library/react";
import { State } from "../../../lib/interface/todoInterface";
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  const handleRemoveItem = jest.fn();

  const todo = {
    _id: "123456",
    title: "달리기",
    desc: "",
    state: State.TODO
  };

  it("TodoItem에는 todo name과 삭제 버튼이 출력되어야합니다.", () => {
    const { getByText, getByRole } = render(
      <TodoItem todo={todo} handleRemoveItem={handleRemoveItem} />
    );

    const deleteButton = getByRole("button", {
      name: "삭제"
    }) as HTMLButtonElement;
    const span = getByText("달리기") as HTMLSpanElement;

    expect(deleteButton).toBeInTheDocument();
    expect(span).toBeInTheDocument();
  });

  it("handleRemoveItem 함수 테스트", () => {
    const { getByRole } = render(
      <TodoItem todo={todo} handleRemoveItem={handleRemoveItem} />
    );

    const deleteButton = getByRole("button", {
      name: "삭제"
    }) as HTMLButtonElement;

    fireEvent.click(deleteButton);
    expect(handleRemoveItem).toBeCalledWith(todo._id);
  });
});
