import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
    <div id="footer">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/orange">Orange</Link>
        <Link to="/">Home</Link>
    </div>
    );
}

export default Footer;


