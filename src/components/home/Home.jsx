import React, { Fragment } from "react";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Features from "./components/Features";
import Resources from "./components/Resources";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Info />
      <Features />
      <Resources />
      <Feedback />
      <Contact />
    </Fragment>
  );
};

export default Home;
