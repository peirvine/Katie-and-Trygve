import React, { useState } from 'react'
import './Nav.scss'
// import logo from '../../images/Peter_Icon.png'
import { NavLink, useLocation  } from "react-router-dom"

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div id="nav" className={navOpen ? '' : 'closed'}>
      <div className={navOpen ? 'buttonContainer change' : "buttonContainer"} onClick={() => setNavOpen(!navOpen)}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/our-story" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Our Story</NavLink>
          </li>
          <li>
            <NavLink exact to="/accommodations" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Accomodations</NavLink>
          </li>
          <li>
            <NavLink exact to="/location" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Location</NavLink>
          </li>
          <li>
            <NavLink exact to="/wedding-party" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Wedding Party</NavLink>
          </li>
          <li>
            <NavLink exact to="/photos"  className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Photos</NavLink>
          </li>
          <li>
            <NavLink exact to="/registry" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Registry</NavLink>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}