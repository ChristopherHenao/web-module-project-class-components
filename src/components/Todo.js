import React from 'react'
import './Todo.css'

const Todo = (props) => {

    const handleClick = () => {
        props.toggleItem(props.todoItem.id)
    }

    return (
        <div>
            <p onClick={handleClick} className={`item${props.todoItem.completed ? ' completed' : ''}`}>{props.todoItem.task}</p>
        </div>
    )
}

export default Todo;