import { useEffect } from "react";
import { renderHook } from "@testing-library/react";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { fetchTodo, todoState } from "../TodoState";
import { ToDo } from "../../../lib/interface/todoInterface";

describe("recoil test", () => {
  it("recoil state 상태 테스트", async () => {
    const query: ToDo = {
      _id: "15251",
      title: "달리기",
      state: "todo",
    };

    const { result } = renderHook(
      () => {
        const setTodos = useSetRecoilState(todoState);
        useEffect(() => {
          setTodos((pre) => [...pre, query]);
        }, [setTodos]);

        return useRecoilValue(todoState);
      },
      {
        wrapper: RecoilRoot,
      },
    );

    expect(result.current).toEqual([
      { _id: "15251", title: "달리기", state: "todo" },
    ]);
    expect(result.current.length).toEqual(1);
  });
});
