import React from 'react'

function Header() {
  return (
    <div style={headerStyle}>
      <h2>Todo</h2>
    </div>
  )
}

const headerStyle = {
  backgroundColor: 'rgba(77,66,179,.7)',
  color: 'white',
  padding: '5px 10px',
  textAlign: 'center',
  textDecoration: 'none'
}

export default Header;