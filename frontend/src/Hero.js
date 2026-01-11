import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import authorImage from "./assets/author-hero.png";
import bookImage from "./assets/truth-book.png";

function Hero() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    const panels = container.children;

    const interval = setInterval(() => {
      if (!isHovered) {
        const newIndex = (index + 1) % panels.length;
        setIndex(newIndex);
        container.scrollTo({
          left: panels[newIndex].offsetLeft,
          behavior: "smooth",
        });
      }
    }, 5000); // ✅ every 10 seconds

    return () => clearInterval(interval);
  }, [isHovered, index]);

  const scrollToPanel = (newIndex) => {
    const container = scrollRef.current;
    const panels = container.children;
    setIndex(newIndex);
    container.scrollTo({
      left: panels[newIndex].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-wrapper">
      <section
        className="hero-scroll"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)} // ✅ pause on hover
        onMouseLeave={() => setIsHovered(false)} // ✅ resume on leave
      >
        {/* Author Panel */}
        <div className="hero-panel">
          <div className="hero-image">
            <img src={authorImage} alt="Vijaya Bharath Reddy" />
          </div>
          <div className="hero-text">
            <h1>
              Truth isn't branded.
              <br />
              It's invited.
            </h1>
            <p>— Vijaya Bharath Reddy Allavada</p>
          </div>
        </div>

        {/* Book Panel */}
        <div className="hero-panel">
          <div className="hero-image">
            <img src={bookImage} alt="Truth Book Cover" />
          </div>
          <div className="hero-text">
            <h1>Truth</h1>
            <p>
              A powerful exploration of clarity and conviction. This book
              invites readers to question, reflect, and embrace authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Arrows */}
      <button
        className="arrow left"
        onClick={() => scrollToPanel((index - 1 + 2) % 2)}
      >
        &#10094;
      </button>
      <button
        className="arrow right"
        onClick={() => scrollToPanel((index + 1) % 2)}
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="dots">
        {[0, 1].map((dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${index === dotIndex ? "active" : ""}`}
            onClick={() => scrollToPanel(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Hero;
