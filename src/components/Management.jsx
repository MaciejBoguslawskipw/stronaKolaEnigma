import React from 'react';
import '../styles/global.css';

const Management = () => {
  return (
    <div className="container">
      <h1>Zarząd Koła Naukowego Enigma</h1>
      <div className="management-list">
        <h2>Prezes</h2>
        <p>Kacper Bogucki</p>

        <h2>Zastępca Prezesa</h2>
        <p>Cezary Gawinek</p>

        <h2>Skarbnik</h2>
        <p>Kamil Dółkowski</p>

        <h2>Sekretarz</h2>
        <p>Wiktor Biliński</p>
      </div>

      <div className="opiekunowie">
        <h2>Opiekunowie Koła</h2>
        <p>dr Piotr Fulmański</p>
        <p>mgr inż. Jakub Chmielak</p>
      </div>
    </div>
  );
};

export default Management;