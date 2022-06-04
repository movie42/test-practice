export enum State {
  TODO = "todo",
  DONE = "done",
}

export interface ToDo {
  id: string;
  name: string;
  state: State;
}
