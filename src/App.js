import React from 'react';
import Header from './components/layout/Header';
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
        completed: true
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} />
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
