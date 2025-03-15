import React from 'react';
import '../styles/global.css';

const Header = () => {
    return (
      <header>
        <h1>Koło Naukowe Enigma</h1>
        <nav>
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