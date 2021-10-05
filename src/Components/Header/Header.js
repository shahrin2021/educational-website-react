import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
          <header className='fixed-top'>
            <nav className="navbar navbar-expand-lg navbar-light header-area">
  <div className="container">
    <NavLink className='nav-link logo-area' to='/home'>FUTURE IT</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span ><i style={{fontSize:'30px'}} className="uil uil-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarScroll">
      <ul className="navbar-nav  ms-auto my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <NavLink className='nav-link header-menu' to='/home'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link header-menu'to='/about'>About</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className='nav-link header-menu' to='/service'>Service</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link header-menu' to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
        </div>
    );
};

export default Header;