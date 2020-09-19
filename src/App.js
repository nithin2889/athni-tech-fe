import React from "react";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home.component";
import Courses from "./components/pages/courses.component";
import SignUp from "./components/pages/sign-up.component";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
