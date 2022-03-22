import '../main.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import CalcPage from './pages/CalcPage';
import Quote from './pages/Quote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<CalcPage />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
