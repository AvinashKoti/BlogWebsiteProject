import React from "react";
import "./About.css";
import authorImage from "./assets/author-hero.png"; // reuse your author portrait

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={authorImage} alt="Vijaya Bharath Reddy Allavada" />
        </div>
        <div className="about-text">
          <h2>About the Author</h2>
          <p>
            Vijaya Bharath Reddy Allavada is a writer driven by clarity and
            conviction. His work explores truth as an invitation rather than a
            brand, encouraging readers to reflect deeply and embrace
            authenticity.
          </p>
          <p>
            With a passion for literature and philosophy, he brings a unique
            voice that resonates with readers seeking meaning beyond convention.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
