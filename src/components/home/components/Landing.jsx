import React, { Fragment } from "react";
import { Link } from "react-scroll";

const Landing = () => {
  return (
    <Fragment>
      <div id='home' className='offset'>
        <div className='landing'>
          <div className='home-wrap'>
            <div className='home-inner'></div>
          </div>
        </div>
        <div className='caption text-center'>
          <h1>Welcome to Help against COVID-19</h1>
          <h3>
            Mutual Help Network in the fight against the Covid-19 virus
            epidemic.
          </h3>
          <Link
            className='btn btn-secondary btn-lg'
            to='course'
            smooth={true}
            duration={1000}
          >
            Start
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
