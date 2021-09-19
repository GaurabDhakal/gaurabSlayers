import React from 'react'
import Footer from './footer'
import { Link } from 'react-router-dom';
function about() {
    return (
        <div>
            <h3>Hey There!</h3>
            <br />
            <p>I am Gaurab Dhakal Leader of Team Slayers and Builder of this Website.</p><br/>
            <p>We Have only 3 player for now as listed below:-</p><br/>
            <ol>
                <li>TS BHOOT</li>
                <li>TS DINESH</li>
                <li>TS SAKKU</li>
            </ol>
            <h5>We Need One Player If You want to join then click:-
            <Link className="btn btn-outline-primary" to="/apply"> Here.</Link>
            </h5><br/>
           <h3> Find Out About Our Players From Below Links!!</h3><br/>
           <Link className="btn btn-outline-primary" to="/sakku"> About Sakku</Link><br/><br/>
           <Link className="btn btn-outline-primary" to="/dinesh"> About Dinesh</Link><br/><br/>
           <Link className="btn btn-outline-primary" to="/bhoot"> About Bhoot</Link><br/>
            <h3 align="center" className="ourdrm">Our Dream!!</h3>
            <p>Our Biggest Dream as A Free Fire Esports Players is To Win a Big Trophy For Our Country and represent our country globally. Currently we are Focusing on Qualifying for Next Free Fire India Championship and Do Something big there or Winning Free Fire India Championship.If we will win Free Fire India Championship Then We will work really hard to do something big in Free Fire World Series.
            </p><br/>
            <h3 align="center">Where Are We From?</h3><br/>
            <p align="center">All The Members of Team Slayers are from Kathmandu,Nepal.</p>
            <br/>
            <h3 align="center">Our Evolution</h3><br/>
            <p>Team Slayers was First Introduced or Founded on 2020. At That Time We Played With Various Team Name Like BlackListed, At That Time we were very weak comparing to others team due to lack of experience and fire power, From 2020 to 2021 We Faced Many LineUp Changes on Our Team But we three (Dinesh, Sakku, Bhoot) didn't got the mate we were searching for that is why we performed really weak. Still We haven't found what we were searching for that is why we have only 3 players currently.
            But if you want to join click
            <Link className="applybtn34" to="/apply">  here.</Link>. We will Contact you if We are interested on you.
            </p><br/>
            <h3 align="center">More About Team Slayers</h3><br/>
          <p>  Team Slayers Was First Founded by <strong>Gaurab Dhakal, Dinesh Dhakal,NTY Sakumar</strong> and <strong>Sakku Pudasaini</strong> with The Goal of Winning Big Trophy And Representing Our Country Globally.
          </p>
            <br/>
            <Footer/>
        </div>
    )
}

export default about
