import React from 'react';
import {Link} from 'react-router-dom';

function DeveloperLinks() {
  return (
    <div>
      <h1 style={headerStyle}>Developer Links</h1>
      {/* <h3 style={headerStyle}>Personal</h3> */}
      <Link to='github.com/anselmleo'>GitHub</Link> | <Link to='anselmmba.tech'>Website</Link>
      <h3 style={body}>Jobs</h3>
      <Link to='dmastermind.com'>Dmastermind</Link> <br /> 
      <Link to='mindgamesincorporated.com'>MGi</Link> <br />
      <Link to='juggernaut.ng'>Juggernaut</Link> <br />
      <Link to='heckerbella.com'>HeckerBella</Link> <br />
      <Link to='cousant.com'>Cousant Connect</Link>
    </div>
  )
}

const headerStyle = {
  color: 'rgba(77,66,179,.7)'
}

const body = {
  color: 'rgba(77,66,179,.7)'
}

export default DeveloperLinks;