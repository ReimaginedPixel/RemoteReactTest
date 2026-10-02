import TodoItem from '../TodoItem/TodoItem.jsx'
import { useState } from 'react';
function TodoList( { todos }) {

    console.log(todos);
    return (
        <section>
            {todos.map((el, index) => (
                <TodoItem key={index} text={el} />
            ))}
        </section>
    );
}


//test comment 

export default TodoList;