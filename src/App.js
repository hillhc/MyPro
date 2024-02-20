import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Project from './pages/project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Hill's portfolio"; // Change the title of the page
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
