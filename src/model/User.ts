import mongoose, { Model } from "mongoose";

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

interface User {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>(
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

export const UserModel: Model<User> =
  mongoose.models.User || mongoose.model("User", UserSchema);
