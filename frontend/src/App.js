import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Why from "./Why";
import BookPreview from "./BookPreview"; // ✅ new import
import Contact from "./Contact";
import AuthorPage from "./AuthorPage";
import BooksPage from "./BooksPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="post-hero-background">
                <About />
                <Why />
                <BookPreview /> {/* ✅ added here */}
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
