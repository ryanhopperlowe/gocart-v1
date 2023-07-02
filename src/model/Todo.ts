import mongoose, { Model } from "mongoose";

interface Todo {
  name: string;
  description: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export default (mongoose.models.Todo as Model<Todo>) ||
  mongoose.model("Todo", TodoSchema);
