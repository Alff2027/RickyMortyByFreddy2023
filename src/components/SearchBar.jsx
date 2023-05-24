import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataContext';
import '../styles/SearchBar.css'

export default function SearchBar() {
  
  const { setSearch } = useContext(DataContext)

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleClick = (e) => {
    setSearch(searchValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(searchValue)
  }

  return (
    <form className='search-bar-container' onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder='Nombre de personaje'
        value={searchValue}
        name='name'
        className='input'
        onChange={(e) => handleChange(e)}
      />
      <button
        type="button"
        className='button'
        placeholder='Buscar'
        onClick={(e) => handleClick(e)}
      >
        Buscar
      </button>
    </form>
  )
}