import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header_container">
      <nav className="header">
        <img
          className="kasa"
          src={process.env.PUBLIC_URL + '/LOGO.png'}
          alt="logo de KASA"
        />
        <NavLink className="homepage" end to="/">
          Accueil
        </NavLink>
        <NavLink className="about" to="/about">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
