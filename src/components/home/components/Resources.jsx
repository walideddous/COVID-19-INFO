import React from "react";

const Resources = () => {
  return (
    <div id='resources' className='offset'>
      <div className='fixed-background'>
        <div className='row dark text-center'>
          <div className='col-12'>
            <h3 className='heading'>Built With Care</h3>
            <div className='heading-underline'></div>
          </div>
          <div className='col-md-4'>
            <h3>REACT JS </h3>
            <div className='feature'>
              <i class='fab fa-react fa-3x'></i>
            </div>
            <p>Built with the latest React JS</p>
          </div>
          <div className='col-md-4'>
            <h3>Bootstrap 4 </h3>
            <div className='feature'>
              <i className='fas fa-bold fa-3x'></i>
            </div>
            <p>Built with the latest Bootstrap 4</p>
          </div>
          <div className='col-md-4'>
            <h3>CSS 3 </h3>
            <div className='feature'>
              <i className='fab fa-css3-alt fa-4x'></i>
            </div>
            <p>Built with the latest CSS 3</p>
          </div>
        </div>
        <div className='fixed-wrap'>
          <div className='fixed'></div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
