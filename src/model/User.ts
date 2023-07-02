import mongoose from "mongoose";

type Field = {
  type: any;
  required: boolean;
  unique: boolean;
};

const field = (overrides?: Partial<Field>): Field => ({
  type: String,
  required: false,
  unique: false,
  ...overrides,
});

const User = new mongoose.Schema(
  {
    name: field({
      required: true,
      unique: true,
    }),
    email: field({
      required: true,
      unique: true,
    }),
    password: field({
      required: true,
    }),
  },
  { timestamps: true }
);

export default mongoose.model("User", User);
