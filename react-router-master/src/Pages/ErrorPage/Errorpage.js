import React from 'react'
import { useRouteError } from 'react-router-dom'
import styles from './Errorpage_module.scss'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <div>
        <h1 className="number">404</h1>
        <h2 className="text_after_number">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink classNmae="link_redirect" to="/Homepage">
          Oups! La page que vous demandez n'existe pas.
        </NavLink>
      </div>
    </>
  )
}
