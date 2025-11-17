import React from 'react'
import { Link } from 'react-router-dom';
import fclLogo from '../assets/FCLlogo1.png';

function NavNotSignedIn() {
  return (
    <div>
        <nav className='nav-bar'>
            <Link to="/"><img src={fclLogo} className='nav-logo'></img></Link>
            <Link to="/">Login/Register</Link>
        </nav>
    </div>
  )
}

export default NavNotSignedIn