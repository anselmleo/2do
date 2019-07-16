import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={headerStyle}>
      <React.Fragment>
        <h2><Link to="/" style={headStyle}>Todo</Link></h2>
        <nav>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/developerlinks" style={linkStyle}>Developer Links</Link>
          <Link to="/credits" style={linkStyle}>Credits</Link>
        </nav>
      </React.Fragment>
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

const headStyle = {
  color: 'white',
  textDecoration: 'none'
}

const linkStyle = {
  color: 'white',
  backgroundColor: 'rgba(77,66,179,1)',
  border: 'blue solid 0px',
  padding: '5px'
}

export default Header;