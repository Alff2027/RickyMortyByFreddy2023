import React from 'react'
import '../styles/Pagination.css'

export default function Pagination({
  onPrevious,
  onNext,
  prev,
  next
}) {

  const handlePrevious = () => {
    console.log('previous')
    onPrevious()
  }

  const handleNext = () => {
    console.log('next')
    onNext()
  }

  return (
    <nav>
      <ul className='pagination'>
        {
          prev ? (
              <li className='page-item'>
                <button className='page-button' onClick={handlePrevious}>
                  Previous
                </button>
              </li>
          )
            : null
        }
        {
          next ? (
            <li className='page-item'>
              <button className='page-button' onClick={handleNext}>
                Next
              </button>
            </li>
          )
          : null
        }  
      </ul>
    </nav>
  )
}
