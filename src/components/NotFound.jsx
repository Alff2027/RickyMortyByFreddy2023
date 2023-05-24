import React from 'react'
import rickymorty from '../images/rickymorty.jpg'
import '../styles/NotFound.css'

export default function NotFound() {
  return (
    <div className='nf-container'>
      <h1>Error 404: <br/> Personaje no encontrado</h1>
      <img src={rickymorty} alt="Not Found" />
    </div>
  )
}
