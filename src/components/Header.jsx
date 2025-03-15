import React, { useState, useEffect, useRef } from 'react';
import '../styles/global.css';
import '../styles/burger.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencja do menu

  // Funkcja do przełączania menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Funkcja do zamykania menu po kliknięciu poza nim
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Efekt do nasłuchiwania kliknięć poza menu
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Sprzątanie
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-content">
        <h1>Koło Naukowe Enigma</h1>
        <button className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <a href="/" onClick={() => setIsMenuOpen(false)}>Strona główna</a>
        <a href="/projects" onClick={() => setIsMenuOpen(false)}>Projekty</a>
        <a href="/collaborations" onClick={() => setIsMenuOpen(false)}>Współprace</a>
        <a href="/memes" onClick={() => setIsMenuOpen(false)}>Memy z IT</a>
        <a href="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
        <a href="/management" onClick={() => setIsMenuOpen(false)}>Zarząd</a>
        <a href="/downloadmoreram" onClick={() => setIsMenuOpen(false)}>Pobierz RAM</a>
      </nav>
    </header>
  );
};

export default Header;