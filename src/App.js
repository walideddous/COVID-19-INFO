import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Info from "./components/info/Info";
import Notfound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Info} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;

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
