import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import './App.css';
import Todos from './components/todo/Todos';
import uuid from 'uuid';

class App extends React.Component
{
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Email MGi on progress of mindgamesincorporated.com",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Finish albrichris homepage component",
        comleted: false 
      },
      {
        id: uuid.v4(),
        title: "Confirm banner print status",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

export default App;
