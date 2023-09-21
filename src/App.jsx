import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Blue from './components/Blue'
import Red from './components/Red'
import Green from './components/Green'
import Orange from './components/Orange'
import Home from './components/Home'
import Footer from './Footer'

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/orange">Orange</Link>
        <Link to="/">Home</Link>
        </div>
      <div id="main-section">
        <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red"  element={<Red />} />
            <Route path="/green" element={<Green />} />
            <Route path="/orange" element={<Orange />} />
            <Route path="/"  element={<Home />} />
        </Routes>
          </div>
          <Footer />
    </div>
  )
}

export default App

 