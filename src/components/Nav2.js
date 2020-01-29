import React from 'react';
import teste from './logo.png';
import menu from './menu.png';


function Nav2() {
        return(
            <div className="nav">
                 <div className="menu">
                    <img src={menu} alt="menu"/>
                </div>
                <div className="logo2">
                    <img src={teste} alt="logo2" />
                </div>
            </div>
        );
}

export default Nav2;