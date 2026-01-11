import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About"; // scroll section on home
import Why from "./Why"; // scroll section on home
import Contact from "./Contact"; // scroll section on home
import AuthorPage from "./AuthorPage"; // separate page
import BooksPage from "./BooksPage"; // separate page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page with scrollable sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Why />
              <Contact />
            </>
          }
        />

        {/* Separate pages */}
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
