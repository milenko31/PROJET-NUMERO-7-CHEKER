import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <div className="container_404">
        <h1 className="number">404</h1>
        <h2 className="text_after_number">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink className="link_redirect" to="/">
          Retourner sur la page d'accueil.
        </NavLink>
      </div>
    </>
  )
}
