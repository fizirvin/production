import React from 'react'
import Navbar from './navbar'
import './menu.css'

export default function Menu() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="text">
          <h2>Proudly serving</h2>
          <h1>Delicious Food Daily</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="#" className="btn">
            Learn more
          </a>
        </div>
      </section>
    </div>
  )
}
