import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import './App.css';
import Todos from './components/todo/Todos';

class App extends React.Component
{
  state = {
    todos: [
      {
        id: 1,
        title: "Email MGi on progress of mindgamesincorporated.com",
        completed: false
      },
      {
        id: 2,
        title: "Finish albrichris homepage component",
        comleted: false 
      },
      {
        id: 3,
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

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
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
