import React from "react";
import help from "../../../img/Help.png";

const Contact = () => {
  return (
    <footer id='contact'>
      <div className='row justify-content-center'>
        <div className='col-5 text-center'>
          <img src={help} alt='logo' />
          <p>
            At our core is a collection of design and development solutions
            thats represent everything your business to compare in the modern
            marketplace
          </p>
          <strong>Contact Info</strong>
          <p>(888) 888 - 8888888</p>
          <a href='' target='_blank'>
            <i className='fab fa-facebook-square'></i>
          </a>
          <a href='' target='_blank'>
            <i className='fab fa-twitter-square'></i>
          </a>
          <a href='' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <hr className='socket' />
        &copy; Nuno Theme.
      </div>
    </footer>
  );
};

export default Contact;
