import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="title">Ripan made a website for Tarini</h1>
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="orb-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p className="scrolling-text">
            This is a website made by Ripan for Tarini • Enjoy the floating orb of images! •
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App