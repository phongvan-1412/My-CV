import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header>
            <ul>
                <li>
                    <Link to="/">
                        <span>Home</span>   
                        <i className='fa fa-home' data-content="Home"></i>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span>About</span> 
                        <i className="fa-solid fa-user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span>Portfolio</span> 
                        <i className="fa-solid fa-folder"></i>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span>Contact</span> 
                        <i className="fa-solid fa-address-card"></i>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;