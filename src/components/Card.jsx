import React from 'react'
import '../styles/Card.css'

export default function Card({data}) {
  return (
    <div className='container'>
      <div className="img-container">
        <img src={ data.image } alt={ data.name } />
      </div>
      <div className="character-data-container">
        <div className="info">
          <strong>{data.name}</strong>
          <hr/>
          <strong>Species:</strong> {data.species} <br />
          <strong>Location:</strong> {data.location.name} <br />
          <strong>Gender:</strong> {data.gender} <br />
          <strong>Status:</strong> {data.status} 
        </div>
        
      </div>
    </div>
  )
}
