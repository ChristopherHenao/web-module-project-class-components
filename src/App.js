import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';


const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todoList
    }
  }

  toggleItem = id => {
    this.setState({
      ...this.state.todo,
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return item
        }
      })
    });
  }

  addItem = name => {
    const newItem = {
      task: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem]
    });
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => {
        return item.completed === false
      })
    });
    //return a list of all groceries items where purchased === false
  }

  

  render() {
    console.log(this.state.todo)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleItem={this.toggleItem} todoList={this.state.todo}/>
        <TodoForm clearCompleted={this.clearCompleted} addItem={this.addItem} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
