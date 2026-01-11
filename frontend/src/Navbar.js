import React from "react";
import { Link } from "react-router-dom"; // ✅ for separate pages
import "./Navbar.css";
import logo from "./assets/vbr-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="VBR Logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#hero">Home</a> {/* scroll to Hero */}
        </li>
        <li>
          <Link to="/author">About</Link> {/* new Author page */}
        </li>
        <li>
          <a href="#why">Why I Write</a> {/* scroll on home */}
        </li>
        <li>
          <Link to="/books">Books</Link> {/* new Books page */}
        </li>
        <li>
          <a href="#contact">Contact</a> {/* scroll on home */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
