import React from 'react';
import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar.js';
import About from './components/about.js'
import Contact from './components/contact.js';
import Home from './components/Home.js';
function App() {

  return (
    <>
    <Router>
    <Navbar title="Learning"/>
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
    </Switch>
    </div>
    </Router>
     </>
  );
}

export default App;
