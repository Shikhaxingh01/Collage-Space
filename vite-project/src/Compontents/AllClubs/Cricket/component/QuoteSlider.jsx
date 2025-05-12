import React, { useEffect, useState } from 'react'
const quotes = [
  {
    text: "You don't play for the crowd, you play for the country.",
    author: 'MS Dhoni',
  },
  {
    text: 'Cricket is a game of uncertainties. One ball can change the fortune of a match.',
    author: 'Sachin Tendulkar',
  },
  {
    text: 'Talent without working hard is nothing.',
    author: 'Virat Kohli',
  },
  {
    text: 'The more difficult the victory, the greater the happiness in winning.',
    author: 'Pele',
  },
]
export const QuoteSlider = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="bg-[#1F2937] p-8 rounded-lg">
      <div className="text-center">
        <svg
          className="w-10 h-10 text-[#FACC15] mx-auto mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-xl mb-4 italic min-h-[4rem] flex items-center justify-center">
          "{quotes[currentQuote].text}"
        </p>
        <p className="text-[#FACC15]">- {quotes[currentQuote].author}</p>
      </div>
      <div className="flex justify-center mt-6">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentQuote === index ? 'bg-[#FACC15]' : 'bg-gray-500'}`}
            onClick={() => setCurrentQuote(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}
