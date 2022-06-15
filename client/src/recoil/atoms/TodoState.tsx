import { atom, selector } from "recoil";
import { ToDo } from "../../lib/interface/todoInterface";
import axios from "axios";

export const todoState = atom<ToDo[]>({
  key: "todo",
  default: [],
});

export const fetchTodo = selector({
  key: "fetchTodo",
  get: async () => {
    const response = await axios.get("http://localhost:3300/api/todo");
    return await response.data;
  },
});
