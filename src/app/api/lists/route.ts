import { NextResponse } from "next/server";
import { whenConnected as whenDbConnected } from "@/utils/db";
import { ShoppingListModel } from "@/model";

export const GET = async () => {
  return whenDbConnected(async () => {
    const todos = await ShoppingListModel.find();
    return NextResponse.json(todos, { status: 200 });
  });
};
