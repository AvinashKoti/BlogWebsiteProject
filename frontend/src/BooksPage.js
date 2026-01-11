import React from "react";
import "./BooksPage.css";
import bookImage from "./assets/truth-book.png"; // ✅ your book cover

function BooksPage() {
  return (
    <div className="books-page">
      <div className="books-banner">
        <h1>Books</h1>
        <p>Explore the literary works of Vijaya Bharath Reddy Allavada</p>
      </div>

      <div className="books-content">
        {/* Book Card */}
        <div className="book-card">
          <img src={bookImage} alt="Truth Book Cover" />
          <div className="book-info">
            <h2>Truth</h2>
            <p>
              A powerful exploration of clarity and conviction. This book
              invites readers to question, reflect, and embrace authenticity.
            </p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>

        {/* Future books can be added here */}
      </div>
    </div>
  );
}

export default BooksPage;
