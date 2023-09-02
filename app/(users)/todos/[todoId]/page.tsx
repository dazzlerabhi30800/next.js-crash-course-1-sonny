import { Todo } from "@/typing";
import React from "react";

type pageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data: Todo = await res.json();
  return data;
};

const TodoPage = async ({ params: { todoId } }: pageProps) => {
  const todo = await fetchTodo(todoId);
  console.log(todo);
  return <div className="w-fit my-5 mx-auto space-y-5 p-5 border border-sky-500 rounded-lg">
    <h2>{todo.title}</h2>
    <p>by UserId : {todo.userId}</p>
    <span className={`${todo.completed ? "text-sky-500" : "text-red-500"} font-semibold`}>{todo.completed ? "Completed" : "Not Completed"}</span>
  </div>;
};

export default TodoPage;
