import React from 'react'
import { Link } from 'react-router-dom';
function gallery() {
    return (
        <div>
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
<h3 align="center">TS SAKKU</h3>
    <img
      src="https://i.ibb.co/txS0410/sakku.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="SAKKU"
    /><br/>
    <p>He is Rusher of Our Team.
  His overall Gameplay is OP.
  His current KD Ratio is 4+ in Ranked Game.
  <Link className="btn btn-outline-primary" to="/sakku"> More...</Link>
</p>
  </div>

  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <h3 align="center">TS DINESH</h3>
    <img
      src="https://i.ibb.co/y0tNj7x/dinesh.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="DINESH"
    /><br/>
<p>He is Rusher+Supporter of Our Team.
  His overall Gameplay is OP.
  His current KD Ratio is 5+ in Ranked Game.
  <Link className="btn btn-outline-primary" to="/dinesh"> More...</Link>
</p>

  </div>

  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <h3 align="center">TS BHOOT</h3>
   <img
      src="https://i.ibb.co/w0fVqQS/bhoot.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="BHOOT"
    /><br/>
    <p>He is Sniper + Leader of Our Team.
  His overall Gameplay is OP.
  His current KD Ratio is 5+ in Ranked Game.
  <Link className="btn btn-outline-primary" to="/bhoot"> More...</Link>
</p>
  </div>
</div>
        </div>
    )
}

export default gallery
