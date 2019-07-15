import React, { Component } from 'react'

class AddTodo extends Component {

  state = {
    title: ''
  }
  
  showTodo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          type="text"
          name="title"
          placeholder="Add todo ..."
          style={addTodoTextStyle}
          value={this.state.title}
          onChange={this.showTodo}
        />
        <input 
          type="submit"
          name="submit"
          value="Submit"
          style={submitStyle}
        />
      </form>
    )
  }
}

const addTodoTextStyle = {
  flex: '10',
  padding: '5px'
}

const submitStyle = {
  flex: '5',
  backgroundColor: 'salmon',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
}

export default AddTodo
