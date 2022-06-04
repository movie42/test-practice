import { useEffect } from "react";
import { renderHook } from "@testing-library/react";
import { State } from "../../../lib/interface/todoInterface";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../TodoState";

it("recoil state 상태 테스트", async () => {
  const query = {
    _id: "15251",
    title: "달리기",
    state: State.TODO
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
      wrapper: RecoilRoot
    }
  );

  expect(result.current).toEqual([
    { _id: "15251", title: "달리기", state: "todo" }
  ]);
  expect(result.current.length).toEqual(1);
});
