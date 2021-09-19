import React from 'react'
import Footer from './footer'
import { Link } from 'react-router-dom';

function abtdinesh() {
    return (
        <div>
<h2 align="center">About TS DINESH!</h2><br/>
<div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <h3 align="center">TS DINESH</h3><br/>
   <img
      src="https://i.ibb.co/y0tNj7x/dinesh.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="DINESH"
    /><br/>
    <p>His real Name is <strong>Dinesh Dhakal</strong> and in-game name is <strong>TS Dinesh.</strong>
</p>
  </div><br/>
  <p> Talking About TS Dinesh's Free Fire Level Then it's 68.
  He has got 12k+ Likes in Like Free Fire Profile.He is the MVP of the team, His role is to rush the teams and punish them up!!<h3>
      More Details About Him are Coming Soon!!</h3></p>
  <br/>
<p align="center">
  <h3 align="center">See Also About</h3>
    About <Link to="/bhoot" className="btn btn-outline-primary"> TS BHOOT</Link><br/><br/>
    About <Link to="/sakku" className="btn btn-outline-primary">TS SAKKU</Link>
</p>
<br/>
<Footer/>
        </div>
    )
}

export default abtdinesh
