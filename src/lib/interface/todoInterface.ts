export enum TodoState {
  TODO = "todo",
  DONE = "done"
}

export interface ToDo {
  id: string;
  name: string;
  state: TodoState;
}
