// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation1";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GSNFranchising from "./pages/GSNFranchising"
import Vision from "./pages/Vision"
import Community from "./pages/Community";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
 import TermsCondition from "./pages/TermsCondition"; 
 import CookiePolicy from "./pages/CookiePolicy";


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/franchising" element={<GSNFranchising />} />
        <Route path="/our-vision" element={<Vision />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
