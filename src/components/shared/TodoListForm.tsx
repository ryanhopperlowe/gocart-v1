"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Todo } from "@/model";
import { useAsync } from "@/hooks";

interface TodoListFormProps {}

export function TodoListForm(props: TodoListFormProps) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Todo>({
    defaultValues: { quantity: 1 },
  });
  const [list, setList] = useState<Todo[]>([]);
  const addItem = (item: Todo) => setList((prev) => prev.concat(item));
  const removeItem = (index: number) =>
    setList((prev) => prev.filter((_, i) => i !== index));

  console.log(errors);
  console.log(getValues());

  const className = "flex justify-center";

  const createTodo = useAsync(async (todo: Todo) => {
    const res = await fetch("http://localhost:3000/api/item", {
      method: "POST",
      body: JSON.stringify(todo),
    });

    if (!res.ok) throw new Error("Failed to create todo");
    const json = await res.json();

    return json;
  });

  return (
    <>
      <p>New List</p>
      <form
        className="w-full"
        onSubmit={(e) => {
          console.log("submit");

          handleSubmit(async (values) => {
            const newItem: Todo = await createTodo.execute(values);
            addItem(newItem);
            console.log("new item", newItem);

            reset();
          }, console.error)(e);
        }}
      >
        <table className="overflow-scroll h-full w-full">
          <thead>
            <tr>
              <th>
                <p>Quantity</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Store</p>
              </th>
              <th>
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>Row</tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
