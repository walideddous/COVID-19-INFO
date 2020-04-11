import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div id='course' className='offset'>
      <div className='col-12 narrow text-center'>
        <h1>Information about infected people in the World</h1>
        <p className='lead'>
          Information in real time about the number of infected people in the
          World
        </p>
        <Link className='btn btn-secondary btn-md' to='/info'>
          MAP
        </Link>
      </div>
    </div>
  );
};

export default Info;
