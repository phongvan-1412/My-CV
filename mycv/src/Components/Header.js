import React from 'react';

const Header = () => {
    return(
        <header>
            <ul>
                <li>
                    <span>Home</span>   
                    <i className='fa fa-home' data-content="Home"></i>
                </li>
                <li>
                    <span>About</span> 
                    <i className="fa-solid fa-user"></i>
                </li>
                <li>
                    <span>Portfolio</span> 
                    <i className="fa-solid fa-folder"></i>
                </li>
                <li>
                    <span>Contact</span> 
                    <i className="fa-solid fa-address-card"></i>
                </li>
            </ul>
        </header>
    )
}

export default Header;