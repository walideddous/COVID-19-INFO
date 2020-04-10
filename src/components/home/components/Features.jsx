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
                  className='fas fa-play-circle fa-4x'
                  data-fa-transform='shrink-3 up-5'
                ></i>
                <h3>I need help</h3>
                <p>I work on the front lines and I need help.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='feature'>
                <i
                  className='fas fa-sliders-h fa-4x'
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
                  className='far fa-address-book fa-4x'
                  data-fa-transform='shrink-3 up-5'
                ></i>
                <h3>Contact Form</h3>
                <p>
                  Animate.css and Waypoints.js allow for smooth animation
                  scrolling down the site.
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
