import React from 'react';
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
const Header = () => {
    const navigate = useNavigate();
    function handleLogoClick(){
        navigate("/")
    }
    function handleHomeClick(){
        navigate("/")
    }
    return (
        <header className="header">
            <div className="nav-container">
                <img src="src/assets/restaurant.jpg" alt="Little Lemon Logo" className="logo" onClick={handleLogoClick}/>
                <nav>
                    <ul className="nav-links">
                        <li><a href='' onClick={handleHomeClick}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
