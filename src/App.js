import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Info from "./components/info/Info";

import "./App.css";

// function useOnScreen(options) {
//   const [ref, setRef] = React.useState(null);
//   const [visible, setvisible] = React.useState(false);
//   React.useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setvisible(entry.isIntersecting);
//       console.log(entry.isIntersecting);
//     }, options);
//     if (ref) {
//       observer.observe(ref);
//     }
//     return () => {
//       if (ref) {
//         observer.unobserve(ref);
//       }
//     };
//   }, [ref, visible, options]);

//   return [setRef, visible];
// }

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
