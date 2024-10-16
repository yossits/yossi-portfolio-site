// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar: React.FC = () => {
  return <nav className="navbar">
    <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/projects" >Projects</Link></li>
      <li><Link to="/contact" >Contact</Link></li>
    </ul>
  </nav>;
};

export default Navbar;
