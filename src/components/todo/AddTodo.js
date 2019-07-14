import React, { Component } from 'react'

class AddTodo extends Component {

  state = {
    title: ''
  }

  showTodo = (e) => {
    this.setState({title: e.target.value})
  }

  addTodo = (e) => {
    console.log(this.state.title);
  }

  render() {
    return (
      <form style={{display: 'flex'}}>
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
          onClick={this.addTodo}
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
