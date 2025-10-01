import React from "react"
import "./App.css"

const contacts = [
  { type: "Email", value: "example@example.com", link: "mailto:example@example.com" },
  { type: "LinkedIn", value: "LinkedIn", link: "https://linkedin.com/in/yourprofile" },
  { type: "GitHub", value: "GitHub", link: "https://github.com/yourusername" },
  { type: "Twitter", value: "Twitter", link: "https://twitter.com/yourhandle" }
]

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Grid / stars background */}
      <div className="stars-background"></div>

      <h1 className="contact-title">REACH OUT</h1>
      <div className="contact-buttons">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            {c.value}
          </a>
        ))}
      </div>
    </div>
  )
}