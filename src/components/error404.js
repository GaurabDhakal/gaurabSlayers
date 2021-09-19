import React from 'react'
import { Link } from 'react-router-dom';
function error404() {
    return (
        <div>
        <link type="text/css" rel="stylesheet" href="https://colorlib.com/etc/404/colorlib-error-404-4/css/style.css" />
        <link type="text/css" rel="stylesheet" href="./ep.css" />
            <div id="notfound">
<div class="notfound">
<div class="notfound-404">
<h1>Oops!</h1>
<h2>404 - The Page can't be found</h2>
</div>
<Link to="/">Go TO Homepage</Link>
</div>
</div>

        </div>
    )
}

export default error404
