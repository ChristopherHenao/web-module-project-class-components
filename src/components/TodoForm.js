import React from 'react' 

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.input)
    }

    handleClear = e => {
        this.props.clearCompleted()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type='text'/>
                    <button>Add Todo</button>
                </form>
                <button onClick={this.handleClear}>Clear Completed</button>
            </div>
        )
    }
}



// const TodoForm = (props) => {


//     return (
//         <div>
//             <form>
//                 <input type='text'/>
//                 <button>Add Todo</button>
//             </form>
//             <button>Clear Completed</button>
//         </div>
//     )
// }

export default TodoForm;