import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
  state: { type: String, default: "todo" },
  start: { type: Date },
  end: { type: Date },
  createdAt: { type: Date, default: Date },
  updatedAt: { type: Date, defulat: Date }
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
