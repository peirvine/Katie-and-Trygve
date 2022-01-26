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
            <NavLink exact to="/" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/our-story" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Our Story</NavLink>
          </li>
          <li>
            <NavLink exact to="/accommodations" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Accomodations</NavLink>
          </li>
          <li>
            <NavLink exact to="/location" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Location</NavLink>
          </li>
          <li>
            <NavLink exact to="/wedding-party" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Wedding Party</NavLink>
          </li>
          <li>
            <NavLink exact to="/photos" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Photos</NavLink>
          </li>
          <li>
            <NavLink exact to="/registry" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>Registry</NavLink>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}