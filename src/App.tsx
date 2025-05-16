import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './components/Home';
import GameEngine from './project_pages/GameEngine';


function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

// Separate component to scroll with hashes
function MainRoutes() {
  const location = useLocation();
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash?.replace("#", ""));

      if (!elementToScroll) return;
      elementToScroll.scrollIntoView({ behavior: "smooth" });
    };

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return () => window.removeEventListener("hashchange", scrollToHashElement);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/dlang-engine" element={<GameEngine />} />
    </Routes>
  );
}

export default App;
