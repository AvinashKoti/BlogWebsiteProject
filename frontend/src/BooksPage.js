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

            {/* ✅ Buy Links */}
            <div className="buy-links">
              <a
                href="https://www.amazon.in/gp/product/9334456477/ref=ox_sc_act_title_1?smid=A2VSHPSZ49F09Q&psc=1"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Buy on Amazon
              </a>
              <a
                href="https://www.flipkart.com/truth-you-distraction-died-chasing/p/itm5e7471ffd36de?pid=9789334456479&lid=LSTBOK9789334456479B9EULO&marketplace=FLIPKART&q=Truth%3A+YOU+ARE+THE+DISTRACTION+YOU+DIED+CHASING&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=a3b5e12d-586f-4c21-a27c-350003e46a6c.9789334456479.SEARCH&ppt=None&ppn=None&ssid=sqvf3n8oww0000001767012202302&qH=1504eb5c2613d832"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Buy on Flipkart
              </a>
              <a
                href="https://www.ziffybees.com/product/truth/"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Buy on ZiffyBees
              </a>
            </div>
          </div>
        </div>

        {/* Future books can be added here */}
      </div>
    </div>
  );
}

export default BooksPage;
