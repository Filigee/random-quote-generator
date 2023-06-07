import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Quotes = () => {
  const [quotes, setQuotes] = useState([])
  const [randomNumber, setRandomNumber] = useState(0)

  useEffect(() => {
    const fetchFiftyQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json()
      setQuotes(data)
      console.log(data)
      console.log(quotes, "quotes")
    } 

    fetchFiftyQuotes()
  }, [])

  // Return text from random quote
  const updateQuoteText = (randomNumber) => {
    console.log(randomNumber)
    if (quotes.length > 0 && quotes[randomNumber].text) {
      validateQuote(randomNumber)
      return quotes[randomNumber].text
    }
    return "";
  };

  // Return author from random quote
  const updateAuthorText = (randomNumber) => {
    console.log(randomNumber)
    if (quotes.length > 0 && quotes[randomNumber].author) {
      validateQuote(randomNumber)
      return quotes[randomNumber].author
    }
    return "";
  }

  // Validate if quote has both text and an author, if not then generate a new quote
  const validateQuote = (randomNumber) => {
    if(quotes[randomNumber].text != undefined && quotes[randomNumber].author != undefined){
      return
    }
    generateRandomNumber()
  }

  // Helper to generate random number and assign to randomNumber state
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    setRandomNumber(randomNumber)
  }
  
  return (
    <div>
      <p>{updateQuoteText(randomNumber)}</p>
      <span>{updateAuthorText(randomNumber)}</span>
      <div>
        <button onClick={generateRandomNumber}>New Quote</button>
      </div>
    </div>
  )
}

export default Quotes

  