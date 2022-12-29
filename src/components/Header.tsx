import React from 'react';
import {Link} from "react-router-dom";
import '../style/Header.scss';
import logo from '../style/images/logo2.jpg';

const Header = () => {
    const checkAuth = () => {
        if (window.location.href.match("login")) {
            return (
                <div>
                    <Link to="/signUp" className="button">Sign up</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/login" className="button">Log in</Link>
                </div>
            )
        }
    }

    return (
        <header className="header">
            <Link to="/Login">
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            {checkAuth()}
        </header>
    );
};

export default Header;