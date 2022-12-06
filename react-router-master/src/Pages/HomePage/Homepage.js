import React from 'react'
//import image from '../../assets/img/picture_header.png'
import Cart from '../../components/Cart/Cart'

export default function Homepage() {
  return (
    <>
      <div className="picture_and_text">
        <p className="text_on_picture">Chez vous, partout et ailleurs</p>
      </div>
      <Cart />
    </>
  )
}
