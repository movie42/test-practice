import { atom, selector } from "recoil";
import { ToDo } from "../../lib/interface/todoInterface";

export const todoState = atom<ToDo[]>({
  key: "todo",
  default: []
});
