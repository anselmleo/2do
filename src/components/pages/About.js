import React from 'react'

function About() {
  return (
    <div>
      <h1 style={headerStyle}>About</h1>
      <p style={body}>
        This project was created as a helper project for new react learners.
      </p>
    </div>
  )
}

const headerStyle = {
  color: 'rgba(77,66,179,.7)'
}

const body = {
  color: 'rgba(77,66,179,1)'
}

export default About