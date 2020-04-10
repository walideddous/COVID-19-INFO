import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div id='course' className='offset'>
      <div className='col-12 narrow text-center'>
        <h1>Information about infected people in USA</h1>
        <p className='lead'>
          Information in real time about the number of infected people in USA
        </p>
        <Link className='btn btn-secondary btn-md' to='/info'>
          INFO
        </Link>
      </div>
    </div>
  );
};

export default Course;
