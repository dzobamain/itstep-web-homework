import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import FamousPainting from "./pages/FamousPainting";
import Gallery from "./pages/Gallery";
import PersonalPage from "./pages/PersonalPage";
import RegistrationForm from "./pages/RegistrationForm";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <nav className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/bio">Biography</Link>
          <Link to="/painting/sample-painting">Famous Painting</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/personal">Personal Page</Link>
          <Link to="/register">Registration</Link>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Biography />} />
            <Route path="/painting/:id?" element={<FamousPainting />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </div>
    );
  }
}
