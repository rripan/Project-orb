import React from "react"
import "./App.css" // for shared styles

export default function About() {
  return (
    <div className="about-container">
      <div className="credits">
        <h2>How did this come to Life</h2>
        <p className="highlight">Website Concept: Ripan</p>
        <p>Design & Development: Ripan</p>
        <p className="highlight">Images Provided By: Ripan</p>
        <p>React + Three.js Orb: Ripan</p>
        <p className="highlight">Special Thanks: Everyone who inspired this project (Taarini)</p>
        <p>Music / Inspiration: Your Favorite Tracks</p>
        <p>© 2025 Ripan & Tarini</p>
      </div>

      {/* Optional: stars background */}
      <div className="stars-background"></div>
    </div>
  )
}