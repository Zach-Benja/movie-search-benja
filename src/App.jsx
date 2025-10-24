import { useState } from 'react';
import './App.css';
import heroBg from './assets/hero-bg.jpg';

// Movie images
import movie1 from './assets/movie1.jpg';
import movie2 from './assets/movie2.jpg';
import movie3 from './assets/movie3.jpg';
import movie4 from './assets/movie4.jpg';
import movie5 from './assets/movie5.jpg';
import movie6 from './assets/movie6.jpg';
import movie7 from './assets/movie7.jpg';
import movie8 from './assets/movie8.jpg';
import movie9 from './assets/movie9.jpg';

function App() {
  const [bgImage, setBgImage] = useState(heroBg);

  const movies = [
    { id: 1, title: "Movie 1", image: movie1, trailer: "#" },
    { id: 2, title: "Movie 2", image: movie2, trailer: "#" },
    { id: 3, title: "Movie 3", image: movie3, trailer: "#" },
    { id: 4, title: "Movie 4", image: movie4, trailer: "#" },
    { id: 5, title: "Movie 5", image: movie5, trailer: "#" },
    { id: 6, title: "Movie 6", image: movie6, trailer: "#" },
    { id: 7, title: "Movie 7", image: movie7, trailer: "#" },
    { id: 8, title: "Movie 8", image: movie8, trailer: "#" },
    { id: 9, title: "Movie 9", image: movie9, trailer: "#" },  
  ];

  return (
    <div className="landing-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="navbar">
        <div className="logo">🎬 BenjaStream</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Movies</li>
          <li>My List</li>
          <li className="login">Login</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>BenjaStream</h1>
        <p>Discover and explore your favorite movies instantly.</p>
        <div className="buttons">
          <button className="watch-btn">Watch More</button>
          <button className="info-btn">Watch Trailer</button>
        </div>
      </div>

      <div className="movie-row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onMouseEnter={() => setBgImage(movie.image)}
            onMouseLeave={() => setBgImage(heroBg)}
          >
            <img src={movie.image} alt={movie.title} />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </div>

      <footer>
        <p>© 2025 BenjaStream. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
