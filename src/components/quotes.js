import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const quotes = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const retrieveQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json()
      setQuotes(data)
    }

    retrieveQuotes()

  }, [])

  console.log(quotes[0], "quotes")

  return (
    <div>
      <p></p>
      <span></span>
      <div>
        <button></button>
        <button></button>
        <button>New Quote</button>
      </div>
    </div>
  )
}

export default quotes