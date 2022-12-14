import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <header className="header_container">
      <nav className="header">
        <img
          className="kasa"
          src={process.env.PUBLIC_URL + '/LOGO.png'}
          alt="logo de KASA"
        />
        <li className="homepage">
          <Link to="/" className={splitLocation[1] === '' ? 'active' : ''}>
            Accueil
          </Link>
        </li>
        <li className="about">
          <Link
            to="/about"
            className={splitLocation[1] === 'about' ? 'active' : ''}
          >
            A propos
          </Link>
        </li>
      </nav>
    </header>
  )
}
export default Header
