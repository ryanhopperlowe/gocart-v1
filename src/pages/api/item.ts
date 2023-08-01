import { Todo, TodoModel } from "@/model";
import { dbEndpoint } from "@/utils/db";
import { NextResponse } from "next/server";

// export default dbEndpoint(async (req) => {
//   const { name, location, quantity } = await req.json();
//   const newTodo: Todo = {
//     name,
//     location,
//     quantity,
//     completed: false,
//   };
//   console.log("newTodo", newTodo);

//   const todo = await TodoModel.create(newTodo);

//   return NextResponse.json(todo, { status: 201 });
// });
