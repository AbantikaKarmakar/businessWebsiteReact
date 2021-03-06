import React from 'react';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;