import React, { useState } from 'react'

const NewTodoForm = () =>{
    const [inputValue, setInputValue] = useState('');
    return(
        <div className="input-group mb-3">
            <input type='text'
                    className='form-control'
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                    placeholder = "Type your new todo here"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Create Todo</button>
            </div>
        </div>
    )
}

export default NewTodoForm