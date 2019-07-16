import React from 'react'

function Credits() {
  return (
    <div>
      <h1 style={headerStyle}>Credits</h1>
      <div style={body}>
        <p>Traversy Media</p>
        <p>Dev.To</p>
        <p>StackOverflow</p>
        <p>CodingTech</p>
        <p>Medium.Com</p> 
      </div>      
    </div>
  )
}

const headerStyle = {
  color: 'rgba(77,66,179,.7)'
}

const body = {
  color: 'rgba(77,66,179,.7)'
}


export default Credits;