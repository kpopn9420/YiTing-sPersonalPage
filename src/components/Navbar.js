import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">My Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="slider" smooth={true} duration={500}>Slider</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;