import React from 'react'
import Footer from './footer'
import { Link } from 'react-router-dom';

function abtsakku() {
    return (

        <div>
            <h2 align="center">About TS SAKKU!</h2><br/>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <h3 align="center">TS SAKKU</h3><br/>
           <img
              src="https://i.ibb.co/txS0410/sakku.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="SAKKU"
            /><br/>
            <p>His real Name is <strong>Sakku Pudasaini</strong> and in-game name is <strong>TS SAKKU.</strong>
        </p>
       </div>
        <br/>
  <p> Talking About TS SAKKU's Free Fire Level Then it's 63.
  He has got 5k+ Likes in Like Free Fire Profile.He plays a Supporter and also as a Vice Leader.
  He also predicts the Safe Zone.<h3>
      More Details About Him are Coming Soon!!</h3> </p>
<br/>
<p align="center">
<h3 align="center">See Also About</h3>
    About <Link to="/bhoot" className="btn btn-outline-primary"> TS BHOOT</Link><br/><br/>
    About <Link to="/dinesh" className="btn btn-outline-primary">TS DINESH</Link>
</p>
<br/>
<Footer/>
          </div>
    )
}

export default abtsakku
