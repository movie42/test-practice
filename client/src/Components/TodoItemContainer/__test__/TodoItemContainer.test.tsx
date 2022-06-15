import { fireEvent, render, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import TodoItemContainer from "../TodoItemContainer";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe(`TodoItemContainer`, () => {
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

  it("TodoItemContainer에는 list가 출력되어야합니다. 리스트에는 todo 제목과 버튼이 있어야합니다.", async () => {
    const { getByText } = render(<TodoItemContainer />, {
      wrapper: RecoilRoot,
    });

    await waitFor(() => getByText("커피 마시기"));
  });

  it("삭제 버튼을 누르면 선택된 아이템이 삭제되어야합니다.", async () => {
    const { getByText } = render(<TodoItemContainer />, {
      wrapper: RecoilRoot,
    });

    const li = getByText("커피 마시기") as HTMLLIElement;

    const button = getByText("삭제") as HTMLButtonElement;
    fireEvent.click(button);
    expect(li).not.toBeInTheDocument();
  });
});
