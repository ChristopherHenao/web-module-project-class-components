// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'


class TodoList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
                <div>
                    {this.props.todoList.map(item => {
                        return <Todo toggleItem={this.props.toggleItem} key={item.id} todoItem={item} />
                    })}
                </div>
        )
    }
}

// const TodoList = (props) => {

//     return (
//         <div>
//             {props.todoList.map(item => {
//                 return <Todo key={item.id} todoItem={item} />
//             })}
//         </div>
//     )
// }

export default TodoList;
