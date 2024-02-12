import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Races from "./pages/Races";
import Blog from "./pages/Blog";
import Records from "./pages/Records";
import Workouts from "./pages/Workouts";
import Photos from "./pages/Photos";
import Paths from "./pages/Routes";
import JoinUs from "./pages/JoinUs";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/races" element={<Races />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/:season" element={<Records />} />
        <Route path="/records/:gender" element={<Records />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/routes" element={<Paths />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
