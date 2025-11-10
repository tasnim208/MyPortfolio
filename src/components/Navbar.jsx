import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({ setIsLoggedIn, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <div className="nav-links">
        <Link to="/profile">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>

        <button className="logout" onClick={() => setIsLoggedIn(false)}>
          Déconnexion
        </button>

        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}