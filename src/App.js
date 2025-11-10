import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        {isLoggedIn && (
          <Navbar setIsLoggedIn={setIsLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode} />
        )}

        <main className="content">
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/projects" element={isLoggedIn ? <Projects /> : <Navigate to="/login" />} />
            <Route path="/project/:id" element={isLoggedIn ? <ProjectDetail /> : <Navigate to="/login" />} />
            <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>

        {isLoggedIn && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;