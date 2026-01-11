import React from "react";
import "./AuthorPage.css";
import authorImage from "./assets/author-hero.png"; // ✅ your author portrait

function AuthorPage() {
  return (
    <div className="author-page">
      <div className="author-banner">
        <div className="author-content">
          <div className="author-image">
            <img src={authorImage} alt="Vijaya Bharath Reddy Allavada" />
          </div>
          <div className="author-text">
            <h1>About the Author</h1>
            <p>
              Vijaya Bharath Reddy Allavada is a writer driven by clarity and
              conviction. His work explores truth as an invitation rather than a
              brand, encouraging readers to reflect deeply and embrace
              authenticity.
            </p>
          </div>
        </div>
      </div>

      {/* Who I Am Section */}
      <section className="who-section">
        <h2>Who I Am</h2>
        <p>I’m not here to preach. Or to decorate myself with titles.</p>
        <p>
          My name is Vijaya Bharath Reddy Allavada — a man who listens more than
          he speaks, and watches the world from the edge rather than the center.
        </p>
        <p>
          I was trained as a cadet in the National Cadet Corps, where discipline
          wasn’t just taught — it was breathed. Once, I was also a horse rider,
          learning balance not just on the saddle, but in life. Later, life took
          me into the world of technology, logic, and systems. But beyond all
          the structure, another part of me kept searching — not for meaning,
          but for clarity.
        </p>
        <p>
          That search turned into writing. Not as a career. But as a response —
          to the noise, the numbness, and the patterns we live without
          questioning.
        </p>
        <p>
          My words are not bound to one genre or philosophy. Some of my books
          might confront blind belief. Some might whisper quiet reflections.
          Others might trace the invisible thread between ancient stories and
          modern minds.
        </p>
        <p>
          Where they go, even I don’t know. What I do know is this: I write only
          when something deep inside me refuses to stay silent.
        </p>
        <p>
          Each book, each blog, each line — is an attempt to hold up a mirror.
          Not always polished. Not always comforting. But real.
        </p>
        <p>
          Because I don’t believe in branding truth. I believe in inviting you
          to see.
        </p>
        <p>
          And if even one sentence makes you stop, turn inward, and question
          what you’ve always accepted — then maybe, just maybe, the words did
          their work.
        </p>
        <p>
          This space — this website — is where those words live. Where thoughts
          are not packaged, but offered. And where, hopefully, you’ll find a
          piece of your own story reflected back.
        </p>
      </section>
    </div>
  );
}

export default AuthorPage;
