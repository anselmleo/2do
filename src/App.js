import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import uuid from 'uuid';

import Header from './components/layout/Header';

import About from './components/pages/About';
import DeveloperLinks from './components/pages/DeveloperLinks';
import Credits from './components/pages/Credits';

import AddTodo from './components/todo/AddTodo';
import Todos from './components/todo/Todos';

import './App.css';

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
      <Router>
        <div className="App">
          <div className="wrapper">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                />
              </React.Fragment>
              )} />

            <Route path="/about" component={About} />
            <Route path="/developerlinks" component={DeveloperLinks} />
            <Route path="/credits" component={Credits} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
