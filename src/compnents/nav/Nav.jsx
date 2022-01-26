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
            <NavLink exact to="/" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>about</NavLink>
          </li>
          <li>
            <NavLink exact to="/gallery" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>gallery</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="selected" onClick={() => setNavOpen(!navOpen)}>contact</NavLink>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}