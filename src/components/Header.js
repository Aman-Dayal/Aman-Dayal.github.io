import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Items */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        {/*<Link to="/blog" onClick={toggleMenu}>Blog</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>*/}
        <Link to="/MyWork" onClick={toggleMenu}>My Work</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
