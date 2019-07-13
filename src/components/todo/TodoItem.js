import React from 'react';
import PropTypes from 'prop-types';

class Todoitem extends React.Component {
  
  getTodoStyle = () => {
    return {
    backgroundColor: 'rgba(172,169,201,.2)',
    color: 'rgba(77,66,179,.9)',
    padding: '5px 10px',
    border: 'solid rgba(77,66,179,.2) 2px',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    
    }
  }
  
  render() {
    const {id, title} = this.props.todo;
    return (
      <p style={this.getTodoStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {" "}
        {title}
        <span style={delStyle}>X</span>
      </p>
    )
  }
}

const delStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '3px',
  borderRadius: '2px',
  float: 'right',
  cursor: 'pointer'
}

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todoitem
