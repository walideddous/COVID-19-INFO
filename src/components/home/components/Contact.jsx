import React from "react";
import help from "../../../img/Help.png";

const Contact = () => {
  return (
    <footer id='contact'>
      <div className='row justify-content-center'>
        <div className='col-5 text-center'>
          <a href='/'>
            <img src={help} alt='logo' />
          </a>
          <p>
            At our core is a collection of design and development solutions
            thats represent everything your business to compare in the modern
            marketplace
          </p>
          <strong>Contact Info</strong>
          <p>(000) 000 - 000000</p>
          <a
            href='https://github.com/walideddous/Help-against-COVID-19'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github fa-3x'></i>
          </a>
        </div>
        <hr className='socket' />
        &copy; Help Theme.
      </div>
    </footer>
  );
};

export default Contact;
