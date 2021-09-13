import React from 'react'

import { Link } from 'react-router-dom';
function about() {
    return (
        <div>
            <h3>Hey There!</h3>
            <br />
            <p>I am Gaurab Dhakal Leader of Team Slayers and Builder of this Website.</p><br/>
            <p>Team Slayers has currently 3 players as listed below:-</p><br/>
            <ol>
                <li>TS BHOOT</li>
                <li>TS DINESH</li>
                <li>TS SAKKU</li>
            </ol>
            <h5>We Need One Player If You want to join then click:-
            <Link className="btn btn-outline-primary" to="/contact"> Here.</Link>
            </h5>
        </div>
    )
}

export default about
