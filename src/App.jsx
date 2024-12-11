import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Inicial from './pages/Inicial';
import Primaria from './pages/Primaria';
import Secundaria from './pages/Secundaria';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/primaria" element={<Primaria />} />
        <Route path="/secundaria" element={<Secundaria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
