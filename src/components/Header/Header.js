import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <Link to={HomePage}><img src="src\assets\restaurant.jpg" alt="Little Lemon Logo" className="logo" /></Link>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
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
