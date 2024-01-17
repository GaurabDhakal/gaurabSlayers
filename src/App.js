import React from 'react';
import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar';
import About from './components/about'
import Contact from './components/contact';
import Home from './components/Home';
import Dinesh from './components/abtdinesh'
import Sakku from './components/abtsakku'
import Bhoot from './components/abtbhoot'
import Feedback from './components/feedback';
import Error404 from './components/error404';
function App() {

  return (
    <Router>
    <Navbar title="Team Slayers"/>
    <div className="container my-3">
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>
    <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/apply">
            <Contact/>
          </Route>
          <Route exact path="/dinesh">
            <Dinesh/>
          </Route>
          <Route exact path="/sakku">
            <Sakku/>
          </Route>
          <Route exact path="/bhoot">
            <Bhoot/>
          </Route>
          <Route exact path="/feedback">
            <Feedback/>
          </Route>
          <Route exact path="*">
            <Error404/>
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
