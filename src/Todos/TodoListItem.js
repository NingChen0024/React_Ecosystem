import React from 'react'

const TodoListItem = ({todo}) => (
    <div>
        <h3>{todo.text}</h3>
        <div>
            <button>Mark As Complete</button>
            <button>Remove</button>
        </div>
    </div>
)

export default TodoListItem