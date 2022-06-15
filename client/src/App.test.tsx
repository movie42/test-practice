import { fireEvent, render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { RecoilRoot } from "recoil";
import App from "./App";

describe("App 통합 테스트", () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 });
  mock.onGet("http://localhost:3300/api/todo").reply(200, {
    todoList: [
      {
        _id: "629b5c610cd5c0ff8dc6efac",
        title: "커피 마시기",
        desc: "오후에 커피를 마셔야 잠이 깬다. 꼭 카페를 가자",
        state: "todo",
        createdAt: "2022-06-04T13:21:37.000Z",
        __v: 0,
      },
    ],
  });
  beforeEach(async () => await axios.get("http://localhost:3300/api/todo"));
  afterAll(async () => mock.reset());

  it("form 컨테이너와 list 컨테이너가 출력되어야합니다.", () => {
    const { getByPlaceholderText, getByTestId } = render(<App />, {
      wrapper: RecoilRoot,
    });
    getByPlaceholderText("할 일을 적어보세요.");
    getByTestId("todo-list-container");
  });

  it("form에 아이템을 입력하고 버튼을 누르면 list 컨테이너에 item이 출력되어야합니다.", () => {
    const { getByPlaceholderText, getByRole, getByText } = render(<App />, {
      wrapper: RecoilRoot,
    });
    const input = getByPlaceholderText("할 일을 적어보세요.");
    const submitButton = getByRole("button", { name: "제출" });
    fireEvent.change(input, { target: { value: "달리기" } });
    fireEvent.click(submitButton);
    const li = getByText("달리기");
    expect(li).toBeInTheDocument();
  });
  it("삭제 버튼을 누르면 list container안에 있는 item이 삭제되어야합니다.", () => {
    const { getByRole, getByText } = render(<App />, {
      wrapper: RecoilRoot,
    });
    const deleteButton = getByRole("button", { name: "삭제" });
    const li = getByText("커피 마시기");
    fireEvent.click(deleteButton);
    expect(li).not.toBeInTheDocument();
  });
});
