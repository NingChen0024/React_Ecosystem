import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList = (
    {todos = [{text:'CCL'}]} )=> (
        <div className='list-wraper mt-3'>
            <NewTodoForm/>
            {todos.map(todo => <TodoListItem todo={todo}/>)}
        </div>
    )

export default TodoList