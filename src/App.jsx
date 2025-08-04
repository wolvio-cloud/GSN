// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation1";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GSNFranchising from "./pages/GSNFranchising"
import Vision from "./pages/Vision"


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/franchising" element={<GSNFranchising />} />
        <Route path="/our-vision" element={<Vision />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
