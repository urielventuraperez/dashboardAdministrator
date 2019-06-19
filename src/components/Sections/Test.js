import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Redirect1 from "./TestRedirect1";
import Redirect2 from "./TestRedirect2";

const Test = () => {
  return(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/redirect1">Test1</Link>
        </li>
        <li>
          <Link to="/redirect2">Test2</Link>
        </li>
      </ul>
      <hr />
      <Route path="/redirect1" component={Redirect1} />
      <Route path="/redirect2" component={Redirect2} />
    </div>
  </Router>
  )
};

export default Test;
