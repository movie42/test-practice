import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

export const filterTodoStateIsDone = selector({
  key: "filterTodoState",
  get: ({ get }) => {
    return get(todoState).filter((value) => value.state === "done");
  }
});
