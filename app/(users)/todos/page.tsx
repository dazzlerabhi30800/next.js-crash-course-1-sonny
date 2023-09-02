import React from 'react';
import TodoList from './TodoList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Todo Page"
}
function Todos() {
    return (
        <div>
            <TodoList />
        </div>
    )
}

export default Todos;