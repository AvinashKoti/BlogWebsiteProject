import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Why from "./Why";
import BookPreview from "./BookPreview";
import ContactPage from "./ContactPage";
import AuthorPage from "./AuthorPage";
import BooksPage from "./BooksPage";
import Footer from "./Footer";

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
                <BookPreview />
                {/* <Contact /> */}
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/author"
          element={
            <>
              <AuthorPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/books"
          element={
            <>
              <BooksPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
