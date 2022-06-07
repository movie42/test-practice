export interface ToDo {
  _id: string;
  title: string;
  desc?: string;
  start?: string;
  end?: string;
  state: "todo" | "done";
  createdAt?: string;
  __v?: number;
}
