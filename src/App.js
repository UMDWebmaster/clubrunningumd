import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HomeMeet from "./pages/HomeMeet";
import HomeMeetRecords from "./pages/HomeMeetRecords";
import About from "./pages/About";
import Races from "./pages/Races";
import Records from "./pages/Records";
import Workouts from "./pages/Workouts";
import Photos from "./pages/Photos";
import Paths from "./pages/Routes";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/home" element={<Home />} /> {/* Alias for Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/signup.php" element={<SignUp />} /> {/* Sign Up page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up page */}
        <Route path="/races" element={<Races />} /> {/* Races page */}
        <Route path="/home-meet" element={<HomeMeet />} />{" "}
        {/* Home Meet page */}
        <Route path="/home-meet-records" element={<HomeMeetRecords />} />{" "}
        {/* Home Meet Records page */}
        <Route path="/records" element={<Records />} /> {/* Records page */}
        <Route path="/records/:season" element={<Records />} />{" "}
        {/* Records page with season parameter */}
        <Route path="/records/:gender" element={<Records />} />{" "}
        {/* Records page with gender parameter */}
        <Route path="/workouts" element={<Workouts />} /> {/* Workouts page */}
        <Route path="/photos" element={<Photos />} /> {/* Photos page */}
        <Route path="/routes" element={<Paths />} /> {/* Routes page */}
        <Route path="/*" element={<Home />} /> {/* Join Us page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
