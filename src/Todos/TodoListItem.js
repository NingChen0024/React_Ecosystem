import React from 'react'

const TodoListItem = ({todo}) => (
    <div className='col-sm-4'>
        <div className='card rounded '>
            <h5 className='card-body'>{todo.text}</h5>
            <div className='card-body'>
               
                <button type="button" className="btn btn-sm btn-outline-primary ">Mark As Complete</button>
                <button type='button' className='btn btn-sm btn-outline-danger float-right'>Remove</button>
                
            </div>
        </div>
    </div>
)

export default TodoListItem