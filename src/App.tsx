import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';

function App() {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash?.replace("#", ""));

      if (!elementToScroll) return;

      elementToScroll.scrollIntoView();
    };


    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return window.removeEventListener("hashchange", scrollToHashElement);
  });

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />  
    </>
  );
}

export default App;
