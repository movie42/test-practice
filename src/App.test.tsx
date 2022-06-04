import { fireEvent, render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "./App";
import InjectTestingRecoilState from "./Common/InjectTestingRecoilState";
import { ToDo } from "./lib/interface/todoInterface";

describe("App 통합 테스트", () => {
  const renderApp = (todos: ToDo[]) =>
    render(
      <>
        <InjectTestingRecoilState todos={todos} />
        <App />
      </>,
      {
        wrapper: RecoilRoot,
      },
    );
  it("form 컨테이너와 list 컨테이너가 출력되어야합니다.", () => {
    const { getByPlaceholderText, getByTestId } = renderApp([]);
    getByPlaceholderText("할 일을 적어보세요.");
    getByTestId("todo-list-container");
  });

  it("form에 아이템을 입력하고 버튼을 누르면 list 컨테이너에 item이 출력되어야합니다.", () => {
    const { getByPlaceholderText, getByRole, getByText } = renderApp([]);
    const input = getByPlaceholderText("할 일을 적어보세요.");
    const submitButton = getByRole("button", { name: "제출" });
    fireEvent.change(input, { target: { value: "달리기" } });
    fireEvent.click(submitButton);
    const li = getByText("달리기");
    expect(li).toBeInTheDocument();
  });
});
