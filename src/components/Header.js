import React from 'react'
import logo from "../assets/logoKasa.png"
import '../css/Header.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt='logo du site' />
      <nav>
        <a className='nav_item' href='/'>Accueil</a>
        <a className='nav_item' href='/a-propos'>A Propos</a>
      </nav>
    </header>
  )
}
