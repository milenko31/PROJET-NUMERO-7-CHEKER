import React from 'react'
import Cart from '../../components/Cart/Cart'

export default function Homepage() {
  return (
    <>
      <div className="container_picture_header_cart">
        <div className="picture_and_text">
          <p className="text_on_picture">Chez vous, partout et ailleurs</p>
        </div>
        <Cart />
      </div>
    </>
  )
}
