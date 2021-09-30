import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos:todos
    }
  }
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(item =>{
        if(item.id === id) {
          return({
            ...item,
            completed: !item.completed
          })
        } else{
          return item;
        }
      })
    })
  }

  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos:this.state.todos.filter(item =>{
        return(!item.completed)
      })
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>TODO list</h2>
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        <TodoForm handleClear={this.handleClear} handleAddTodo={this.handleAddTodo} todos={this.state.todos}/>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
