import React from "react";
import { Link } from "react-router-dom";
import "./BookPreview.css";
import bookImage from "./assets/truth-book.png"; // ✅ your book cover

function BookPreview() {
  return (
    <section className="book-preview">
      <h2>Featured Book</h2>
      <div className="book-preview-content">
        <img
          src={bookImage}
          alt="Truth Book Cover"
          className="book-preview-img"
        />
        <div className="book-preview-text">
          <p>
            <strong>Truth</strong> — A powerful exploration of clarity and
            conviction.
          </p>
          <Link to="/books" className="see-more-link">
            See more →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookPreview;
