import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import MyWork from './components/MyWork';
import './App.css'; // General styles for the whole app

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/MyWork" element={<MyWork />} />
        {/*<Route path="/contact" element={<Contact />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
