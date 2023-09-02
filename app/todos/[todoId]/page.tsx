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
  return <div> TodoPage: {todoId}</div>;
};

export default TodoPage;
