import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export default function DataProvider({ children }) {

  const [data, setData] = useState([])
  const [info, setInfo] = useState([])
  const [search, setSearch] = useState('')

  const API = `https://rickandmortyapi.com/api/character/?page=&name=${search}`

  const fetchCharacters = async (API) => {
    try {
      await fetch(API)
        .then(res => res.json())
        .then(data => {
          setData(data.results)
          setInfo(data.info)
        })
    } catch (error) {
      setData(error)
    }
  }

  useEffect(() => {
    fetchCharacters(API)
  }, [API])

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  return (
    <DataContext.Provider value={{
      data,
      setData,
      info,
      setInfo,
      onPrevious,
      onNext,
      search,
      setSearch
    }}>
      {children}
    </DataContext.Provider>
  )

}