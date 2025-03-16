import React, { useState, useEffect } from 'react';
import '../styles/global.css';

const Memes = () => {
  const [memes, setMemes] = useState([]); // Przechowuje listę memów
  const [loading, setLoading] = useState(true); // Stan ładowania
  const [error, setError] = useState(null); // Błędy

  // Funkcja do pobierania memów z Reddita
  const fetchMemes = async () => {
    try {
      const response = await fetch('https://www.reddit.com/r/ProgrammerHumor/hot.json?limit=20');
      const data = await response.json();
      const memesData = data.data.children.map((post) => ({
        title: post.data.title,
        image: post.data.url,
        link: `https://www.reddit.com${post.data.permalink}`,
      }));
      setMemes(memesData);
      setLoading(false);
    } catch (err) {
      setError('Nie udało się załadować memów. Spróbuj ponownie później.');
      setLoading(false);
    }
  };

  // Pobierz memy po załadowaniu komponentu
  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="container">
      <h1>Memy z IT</h1>
      {loading && <p>Ładowanie memów...</p>}
      {error && <p className="error">{error}</p>}
      <div className="memes-grid">
        {memes.map((meme, index) => (
          <div key={index} className="meme-item">
            <h3>{meme.title}</h3>
            {meme.image.endsWith('.jpg') || meme.image.endsWith('.png') ? (
              <img src={meme.image} alt={meme.title} className="meme-image" />
            ) : (
              <p>To nie jest obrazek. <a href={meme.link} target="_blank" rel="noopener noreferrer">Zobacz post</a></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memes;