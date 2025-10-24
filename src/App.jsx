import './App.css';
import heroBg from './assets/hero-bg.jpg';

function App() {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${heroBg})` }}>
      <nav className="navbar">
        <div className="logo">🎬 CineStream</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Movies</li>
          <li>My List</li>
          <li className="login">Login</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>CineStream</h1>
        <p>Discover and explore your favorite movies instantly.</p>
        <div className="buttons">
          <button className="watch-btn">Watch More</button>
          <button className="info-btn">More Information</button>
        </div>
      </div>

      <footer>
        <p>© 2025 CineStream. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
