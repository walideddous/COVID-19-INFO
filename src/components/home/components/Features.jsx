import React from "react";

const Features = () => {
  return (
    <div id='features' className='offset'>
      <div className='jumbotron'>
        <div className='narrow text-center'>
          <div className='col-12'>
            <h3 className='heading'>How it Work</h3>
            <div className='heading-underline'></div>
          </div>
          <div className='row text-center'>
            <div className='col-md-4'>
              <div className='feature'>
                <i
                  className='fas fa-hands-helping fa-4x'
                  data-fa-transform='shrink-3 up-5'
                ></i>
                <h3>I need help</h3>
                <p>I work on the front lines and I need help.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='feature'>
                <i
                  className='fas fa-hands-helping fa-4x'
                  data-fa-transform='shrink-4.5 up-4.5'
                ></i>
                <h3>I need help</h3>
                <p>
                  I am part of at-risk populations or I know someone who is.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='feature'>
                <i
                  className='fas fa-people-carry fa-4x'
                  data-fa-transform='shrink-3 up-5'
                ></i>
                <h3>offer my help</h3>
                <p>
                  I can help front-line workers and people in the populations
                  subprime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
