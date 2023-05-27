import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Blog from './pages/Blog';
import Races from './pages/Races';
import Records from './pages/Records';
import Workouts from './pages/Workouts';
import Photos from './pages/Photos';
import Paths from './pages/Routes';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width"/>

            </head>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/races" element={<Races />} />
                <Route path="/records" element={<Records />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/routes" element={<Paths />} />

            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
