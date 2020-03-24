import React from 'react'

const TodoListItem = ({todo}) => (
    <div className='col-sm'>
        <div className='card rounded '>
            <h5 className='card-header'>{todo.text}</h5>
            <div className='card-body'>

                <button type='button' className='btn btn-sm btn-outline-danger float-right'>Remove</button>
                <div className='m-10 float-right'>&ensp;</div>
                <button type="button" className="btn btn-sm btn-outline-primary float-right ">Mark As Complete</button>

            </div>
        </div>
    </div>
)

export default TodoListItem