import React from 'react';
import PropTypes from 'prop-types';

class Todoitem extends React.Component {
  render() {
    return (
      <p style={todoStyle}>
        <input type="checkbox"/> {" "}
        {this.props.todo.title}
        <span style={delStyle}>X</span>
      </p>
    )
  }
}

const todoStyle = {
  backgroundColor: 'rgba(172,169,201,.2)',
  color: 'rgba(77,66,179,.9)',
  padding: '5px 10px',
  border: 'solid rgba(77,66,179,.2) 2px',
}

const delStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '3px',
  borderRadius: '2px',
  float: 'right',
  cursor: 'pointer'
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}
export default Todoitem
