import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import {connect} from 'react-redux'
import {removeTodo} from './actions'

const TodoList = (
    {todos = [], onRemovePressed} ) => (
        <div className='list-wraper mt-3'>
            <NewTodoForm/>
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
        </div>
    )

const mapStateToProps= state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)