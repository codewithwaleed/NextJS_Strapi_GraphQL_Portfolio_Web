import React from 'react'
import useFetch from '../hooks/useFetch'

const HomePage = () => {
    const {loading, error, data} = useFetch('http://localhost:1337/api/portfolios')
    error && <div>{error}</div>
  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage
