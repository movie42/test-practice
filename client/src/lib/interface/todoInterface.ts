export enum State {
  TODO = "todo",
  DONE = "done"
}

export interface ToDo {
  _id: string;
  title: string;
  desc?: string;
  start?: string;
  end?: string;
  state: State;
}
