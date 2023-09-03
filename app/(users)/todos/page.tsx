import React, { Suspense } from 'react';
import TodoList from './TodoList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Todo Page"
}
function Todos() {
    return (
        <div >
            <Suspense fallback={<p className='m-2'>Loading the Todos...</p>}>
                <TodoList />
            </Suspense>
        </div>
    )
}

export default Todos;