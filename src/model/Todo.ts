import mongoose, { Model, Mongoose } from "mongoose";

export interface Todo {
  quantity: number;
  name: string;
  location: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    location: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const TodoModel: Model<Todo> =
  mongoose.models.Todo || mongoose.model<Todo>("Todo", TodoSchema);
