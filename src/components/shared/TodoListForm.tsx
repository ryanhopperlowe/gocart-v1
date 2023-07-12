"use client";

import { Input, Typography } from "@/external";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
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
      <Typography variant="h5">New List</Typography>
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
                <Typography variant="lead">Quantity</Typography>
              </th>
              <th>
                <Typography variant="lead">Name</Typography>
              </th>
              <th>
                <Typography variant="lead">Store</Typography>
              </th>
              <th>
                <Typography variant="lead">Actions</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <Typography>{item.quantity}</Typography>
                  </div>
                </td>
                <td>
                  <div className={className}>
                    <Typography>{item.name}</Typography>
                  </div>
                </td>
                <td>
                  <div className={className}>
                    <Typography>{item.location}</Typography>
                  </div>
                </td>
                <td>
                  <Button
                    variant="filled"
                    fullWidth
                    className="col-span-2"
                    onClick={() => removeItem(index)}
                  >
                    - Remove
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="col-span-2">
                <Input
                  width={"30px"}
                  type="number"
                  {...register("quantity", {
                    onChange: ({ target: { value } }) =>
                      setValue("quantity", +value > 0 ? +value : 1),
                    valueAsNumber: true,
                  })}
                />
              </td>
              <td className="col-span-4">
                <Input label="Name" {...register("name", { min: 2 })} />
              </td>
              <td className="col-span-4">
                <Input
                  label="Store (optional)"
                  {...register("location", { min: 2 })}
                />
              </td>
              <td className="col-span-2">
                <Button
                  variant="filled"
                  className="col-span-2"
                  type="submit"
                  fullWidth
                >
                  + Add
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
