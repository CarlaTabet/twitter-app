import React from 'react';
import "../Styles/Header.css"
import {Link} from "react-router-dom";

const Header = (props) => {
    let numUsers = 37;

    return (
        <div id = 'overall'>
                <h2 id='title'>Twitter</h2>
                <p class = 'tabs'>Latest</p>
                <p class = 'tabs'>Explore</p>
                <Link to="/Profile"><button>My Profile</button></Link>
        </div> 
    )
}


export default Header;

