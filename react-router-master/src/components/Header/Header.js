import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

function Header() {
  return (
    <header>
      <nav className={`${styles.header}`}>
        <img
          className={`${styles.kasa}`}
          src={process.env.PUBLIC_URL + '/LOGO.png'}
          alt="logo de KASA"
        />
        <NavLink className={`${styles.homepage}`} end to="/">
          Accueil
        </NavLink>
        <NavLink className={`${styles.about}`} to="/about">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
