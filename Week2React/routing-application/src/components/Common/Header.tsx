import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return(
            <nav className="top-nav">
                <Link to="/" className="nav-items">Home</Link>
                <Link to="/about-us" className="nav-items">About Us</Link>
                <Link to="/contact-us" className="nav-items">Contact</Link>
            </nav>
        );
    }
}