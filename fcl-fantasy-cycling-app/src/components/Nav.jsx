import React from 'react'
import { Link } from 'react-router-dom';
import fclLogo from '../assets/FCLlogo1.png';


function Nav({userSignedIn}) {
    if (userSignedIn === false) {
        return(
            <div>
                <nav className='nav-bar'>
                    <Link to="/"><img src={fclLogo} className='nav-logo'></img></Link>
                    <Link to="/">Login</Link>
                </nav>
            </div>
        )
    } else {
        return(
    <>
        <div>
            <nav className='nav-bar'>
                <img src={fclLogo} className='nav-logo'></img>
                <ul className='nav-list'>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/teampage">Team Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            
        </div>
    </>
    );
};
};

export default Nav