import React from "react";
import { Link } from "react-scroll";
import ReactLogo from "../img/logo512.png";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        <img src={ReactLogo} alt='help' /> Covid-19 INFO
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarResponsive'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link to='Map' smooth={true} duration={1000} className='nav-link'>
              Map
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
