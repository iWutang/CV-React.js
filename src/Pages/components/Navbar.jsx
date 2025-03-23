import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='nav-bg'>
            <div className="navbar">
                <div className="logo"><NavLink to="/">JOHN DOE</NavLink></div>
                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/">ACCUEIL</NavLink></li>
                    <li><NavLink to="/services">SERVICES</NavLink></li>
                    <li><NavLink to="/realisations">RÉALISATIONS</NavLink></li>
                    <li><NavLink to="/blog">BLOG</NavLink></li>
                    <li><NavLink to="/contact">ME CONTACTER</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}   

export default Navbar;