import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'


function Nav() {
  return (
    <div className='navbar'>
      <div className='l-nav'>
        <div className="Profile">My Profile</div>        
      </div>
      <div className='r-nav'>
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='contact' smooth={true} duration={1000}>About me</Link></li>
            <li><Link to='port' smooth={true} duration={1000}>Portfolio</Link></li>
          </ul>
        </div>
        <button className="n-button"><Link to='me' smooth={true} duration={1000}>Contact Me</Link></button>
      </div>
    </div>
  )
}

export default Nav