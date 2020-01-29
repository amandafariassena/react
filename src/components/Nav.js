import React from 'react';
import teste from './logo.png';
import {Link} from 'react-router-dom';


function Nav() {
        return(
            <div className="nav">
                <div className="logo">
                <img src={teste} alt="logo" />
                </div>
                <ul>
                    <li>Politics</li>
                    <li>Business</li>
                    <li>Tech</li>
                    <li>Science</li>
                    <li>Sports</li>
                    <Link to="/login">
                    <li>Login</li>
                    </Link>
                </ul>
            </div>
        );
}

export default Nav;