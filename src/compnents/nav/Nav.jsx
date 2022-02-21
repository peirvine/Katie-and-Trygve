import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './Nav.scss'
import logo from '../../images/Website Logo.png'
import { NavLink, useLocation  } from "react-router-dom"

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const [anchorTarget, setAnchorTarget] = useState(null);

  const handleClick = event => {
    setNavOpen(!navOpen)
    // event.preventDefault()
    console.warn('event', event.target.hash)
    let target = document.getElementById(event.target.hash)
    console.warn('target', target)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="nav" className={navOpen ? '' : 'closed'}>
      <div className={navOpen ? 'buttonContainer change' : "buttonContainer"} onClick={() => setNavOpen(!navOpen)}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div id="navLogo">
        <img src={logo} alt="website logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="header"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <NavLink exact to="/our-story" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Our Story</NavLink>
          </li> */}
          <li>
            {/* <NavLink exact to="#accommodations" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Accomodations</NavLink> */}
            <Link
              activeClass="active"
              to="accommodations"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavOpen(false)}
            >
              Accomodations
            </Link>
          </li>
          <li>
            {/* <NavLink exact to="#location" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Location</NavLink> */}
            <Link
              activeClass="active"
              to="location"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavOpen(false)}
            >
              Location
            </Link>
          </li>
          {/* <li>
            <NavLink exact to="/wedding-party" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Wedding Party</NavLink>
          </li> */}
          {/* <li>
            <NavLink exact to="/photos"  className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Photos</NavLink>
          </li> */}
          {/* <li>
            <NavLink exact to="/registry" className={(navData) => navData.isActive ? "active" : "" } onClick={() => setNavOpen(!navOpen)}>Registry</NavLink>
          </li> */}
        </ul>

      </nav>
    </div>
  )
}
