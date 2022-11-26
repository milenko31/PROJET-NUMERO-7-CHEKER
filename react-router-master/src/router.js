import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Homepage from './Pages/HomePage/Homepage'
// import Cart from './components/Cart/Cart'
import ErrorPage from './Pages/ErrorPage/Errorpage'
import About from './Pages/About/About'
import Logement from './Pages/Logement'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'logement/:id',
        element: <Logement />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
