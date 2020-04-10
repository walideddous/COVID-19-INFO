import React from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import help from "../img/Help.png";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
      <a className='navbar-brand' href='/'>
        <img src={help} alt='help' /> Help against Covid-19
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
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/info'>
              Info
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='features'
              smooth={true}
              duration={2000}
            >
              Add
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='resources'
              smooth={true}
              duration={2000}
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
