import React, { Fragment } from "react";
import client1 from "../../../img/client1.png";
import client2 from "../../../img/client2.png";

const Feedback = () => {
  return (
    <Fragment>
      <div id='clients' className='offset'>
        <div className='jumbotron'>
          <div className='col-12 text-center'>
            <h3 className='heading'>Feedback</h3>
            <div className='heading-underline'></div>
          </div>
          <div className='row'>
            <div className='col-md-6 clients'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={client1} alt='client1' />
                </div>
                <div className='col-md-8'>
                  <blockquote>
                    <i className='fas fa-quote-left'></i>I began my confinement
                    on Friday, March 13, before bars and public places closed.
                    Working in IT, I was easily able to get myself to safety and
                    stop any exit. If the medical staff is on the front line, I
                    feel like I'm in a bunker. I'm almost ashamed of how lucky I
                    am. I registered on enpremiereligne.fr because I want to
                    help those who need it. By registering, I was put in touch
                    with a person who is a nurse in my town. For the moment, she
                    still has food reserves for several days, but she knows that
                    in the next few days, when the health crisis will have
                    become even worse, she will be able to count on me.
                    <hr className='clients-hr' />
                    <cite>&#8212; Alexandre</cite>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-md-6 clients'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={client2} alt='client2' />
                </div>
                <div className='col-md-8'>
                  <blockquote>
                    <i className='fas fa-quote-left'></i>My husband and I are
                    nurses with two small children. I discovered On the Front
                    Line yesterday at 10 pm while looking for how I could go
                    shopping: I signed up with just a few clicks on my phone.
                    The next day when I woke up at 5:30am, I had the good
                    surprise to get an email to put me in touch with Thomas, who
                    was able to deliver my groceries the same day at 1pm. I
                    recommend to all workers in need to register
                    <hr className='clients-hr' />
                    <cite>&#8212; Marion</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 narrow text-center'>
          <p className='lead'>
            We are 79,486 volunteers. 97.15 % of the requests for help have been
            resolved.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Feedback;
