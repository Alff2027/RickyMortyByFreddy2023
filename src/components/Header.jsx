import React from 'react'
import logo from '../images/rick-and-morty.png'
import '../styles/Header.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="Rick and Morty" className='logo' />
    </header>
  )
}

export default Header

