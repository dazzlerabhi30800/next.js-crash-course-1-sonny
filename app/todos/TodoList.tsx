import { Todo } from '@/typing';
import Link from 'next/link';
import React from 'react'

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();
    return todos;
}

const TodoList = async () => {
    const todos = await fetchTodos();
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 p-2'>
            {todos.map((todo) => (
                <div className='border p-2 w-fit border-blue-500 rounded-md transition ease-in duration-300 hover:border-transparent hover:bg-blue-500 hover:text-white' key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
                </div>
            ))}
        </div>
    )
}

export default TodoList