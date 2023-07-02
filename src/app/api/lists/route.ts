import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import User from "@/model/User";
import Todo from "@/model/Todo";

export async function GET(req: any) {
  try {
    await connectDB();
    const todos = await Todo.find();
    console.log(todos);

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return new NextResponse("DB Error", { status: 500 });
  }
}
