import React from 'react'
import Footer from './footer'
import { Link } from 'react-router-dom';

function abtbhoot() {
    return (
        <div>
<h2 align="center">About TS BHOOT!</h2><br/>
<div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <h3 align="center">TS BHOOT</h3><br/>
   <img
      src="https://i.ibb.co/w0fVqQS/bhoot.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="BHOOT"
    /><br/>
    <p>His real Name is <strong>Gaurab Dhakal</strong> and in-game name is <strong>TS BHOOT.</strong>
</p>
  </div>
<br/>
<p> Talking About TS BHOOT's Free Fire Level Then it's 69.
  He has got 11k+ Likes in Like Free Fire Profile.He is the Leader and kinda manager of the Team We Searches for The Tournament and scrims where we Can Play,he is founding member of Team slayers.<h3>
      More Details About Him are Coming Soon!!</h3></p>







  <br/>
<p align="center">
<h3 align="center">See Also About</h3>
    About <Link to="/sakku" className="btn btn-outline-primary"> TS SAKKU</Link><br/><br/>
    About <Link to="/dinesh" className="btn btn-outline-primary">TS DINESH</Link>
</p>
<br/>
<Footer/>
        </div>
    )
}

export default abtbhoot
