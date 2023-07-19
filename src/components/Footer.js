import React from 'react'
import '../css/Footer.css'
import logo from "../assets/logoKasaWhite.png"

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo blanc du site'/>
      <p className='footer_rights'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
