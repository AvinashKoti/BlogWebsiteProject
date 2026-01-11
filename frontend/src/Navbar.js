import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/pagelogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="VBR Logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* ✅ goes back to root */}
        </li>
        <li>
          <Link to="/author">About</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
