import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/burger.css'; // Importujemy nowy plik CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Strona główna</a>
        <a href="/projects">Projekty</a>
        <a href="/collaborations">Współprace</a>
        <a href="/memes">Memy z IT</a>
        <a href="/contact">Kontakt</a>
        <a href="/management">Zarząd</a>
        <a href="/downloadmoreram">Pobierz RAM</a>
      </nav>
    </header>
  );
};

export default Header;