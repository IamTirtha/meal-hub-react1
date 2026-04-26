// import React from "react";
import mealImage from '../../assets/meal-photo.jpg'
import './Navbar.css'
    const Navbar = () => {
    return (
        
    <nav className="navbar">
        <div className="leftnav">
        <img src={mealImage} className="mealImg" alt="logo" />
        <p>Meal-Hub</p>
        </div>

        <div>
        <ul className="rightnav">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order">Order</a></li>
        </ul>
        </div>
    </nav>
        
    );
    };

    export default Navbar;
