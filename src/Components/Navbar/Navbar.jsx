import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoNgo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <img src={logo} alt="NGO Logo" className="Ngologo" />

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="navBarItem" onClick={closeMenu}><a href="#home">Home</a></li>
        <li className="navBarItem" onClick={closeMenu}><a href="#about">About Us</a></li>
        <li className="navBarItem" onClick={closeMenu}><a href="#programs">Programs</a></li>
        <li className="navBarItem" onClick={closeMenu}><a href="#recruitment">Recruitment</a></li>
        <li className="navBarItem" onClick={closeMenu}><a href="#team">Meet Our Team</a></li>
        <li className="navBarItem" onClick={closeMenu}><a href="#achievements">Achievements</a></li>
        <li className="contactUs" onClick={closeMenu}><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
