import { Todo } from "@/model";
import mongoose, { Model } from "mongoose";

export interface ShoppingList {
  name: string;
  isDraft: boolean;
  description?: string;
  completed: boolean;
  items: Todo[];
}

const ShoppingListSchema = new mongoose.Schema<ShoppingList>({
  name: {
    type: String,
    required: true,
  },
  isDraft: {
    type: Boolean,
    default: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

export const ShoppingListModel: Model<ShoppingList> =
  mongoose.models.ShoppingList ||
  mongoose.model("ShoppingList", ShoppingListSchema);
