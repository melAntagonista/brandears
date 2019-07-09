import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
        <nav className="nav.nav-wrapper.red-darken-3">
            <div className="container">
                <ul>
                    <li><Link to="/">Intro</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/discover">Discover</Link></li>
                    <li><Link to="/graph">Graph</Link></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar 