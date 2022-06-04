import { render, renderHook } from "@testing-library/react";
import { useEffect } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { State } from "../../../lib/interface/todoInterface";
import { todoState } from "../../atoms/TodoState";
import { filterTodoStateIsDone } from "../FilterTodoState";

describe("filter todo selector 테스트", () => {
  it("처음에 아무런 데이터가 없습니다.", () => {
    const { result } = renderHook(
      () => {
        const todos = useRecoilValue(filterTodoStateIsDone);

        return todos;
      },
      {
        wrapper: RecoilRoot
      }
    );
    expect(result.current.length).toBe(0);
  });

  it("state가 done인 객체만 있어야합니다.", () => {
    const { result } = renderHook(
      () => {
        const setTodo = useSetRecoilState(todoState);
        useEffect(() => {
          setTodo((pre) => [
            ...pre,
            {
              _id: "123123",
              title: "달리기",
              desc: "달리기는 즐겁다.",
              state: State.TODO
            },
            {
              _id: "12315523",
              title: "비타민 먹기",
              desc: "비타민은 맛없다.",
              state: State.DONE
            },
            {
              _id: "1512525",
              title: "팀 미팅",
              desc: "팀 미팅 말고 여자랑 소개팅 하고 싶다.",
              state: State.DONE
            }
          ]);
        }, [setTodo]);

        const filter = useRecoilValue(filterTodoStateIsDone);
        return filter;
      },
      {
        wrapper: RecoilRoot
      }
    );

    expect(result.current.length).toBe(2);
    expect(result.current).toEqual([
      {
        _id: "12315523",
        title: "비타민 먹기",
        desc: "비타민은 맛없다.",
        state: State.DONE
      },
      {
        _id: "1512525",
        title: "팀 미팅",
        desc: "팀 미팅 말고 여자랑 소개팅 하고 싶다.",
        state: State.DONE
      }
    ]);
  });
});
