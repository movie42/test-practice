import { fireEvent, render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import InjectTestingRecoilState from "../../../Common/InjectTestingRecoilState";
import { State, ToDo } from "../../../lib/interface/todoInterface";
import TodoItemContainer from "../TodoItemContainer";

describe(`TodoItemContainer`, () => {
  const todos = [{ id: "1234", name: "달리기", state: State.TODO }];
  const renderTodoItemContainer = (todos: ToDo[]) =>
    render(
      <RecoilRoot>
        <InjectTestingRecoilState todos={todos} />
        <TodoItemContainer />
      </RecoilRoot>
    );

  it("TodoItemContainer에는 list가 출력되어야합니다. 리스트에는 todo 제목과 버튼이 있어야합니다.", () => {
    const { getByText } = renderTodoItemContainer(todos);
    getByText("달리기") as HTMLLIElement;
    getByText("삭제") as HTMLButtonElement;
  });

  it("삭제 버튼을 누르면 선택된 아이템이 삭제되어야합니다.", () => {
    const { getByText } = renderTodoItemContainer(todos);
    const removeButton = getByText("삭제") as HTMLButtonElement;
    const li = getByText("달리기") as HTMLLIElement;
    fireEvent.click(removeButton);
    expect(li).not.toBeInTheDocument();
  });
});
