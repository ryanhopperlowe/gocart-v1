import mongoose, { Model } from "mongoose";

interface Todo {
  name: string;
  description: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const TodoModel: Model<Todo> =
  mongoose.models.Todo || mongoose.model<Todo>("Todo", TodoSchema);
