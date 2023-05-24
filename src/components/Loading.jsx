import React from 'react'
import loading from '../images/pickle-rick.png'
import '../styles/Loading.css'

export default function Loading() {
  return (
    <div className='loading-container'>
      <div className="loading-image-container">
        <img className='image' src={loading} alt="imagen de carga" />
      </div>
      <h2 className='text'>Loading...</h2>
    </div>
  )
}
