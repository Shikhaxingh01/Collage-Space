
import React from 'react'
import { ChessPiece } from './ChessPiece'
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Chess Pattern Background */}
      <div className="absolute inset-0 bg-[#111827] opacity-90">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-5">
          {Array.from({
            length: 64,
          }).map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}`}
            />
          ))}
        </div>
      </div>
      {/* Animated Chess Pieces */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float-slow opacity-20">
          <ChessPiece piece="knight" className="text-[#FACC15] text-6xl" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed opacity-20">
          <ChessPiece piece="bishop" className="text-white text-6xl" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float opacity-20">
          <ChessPiece piece="queen" className="text-[#FACC15] text-6xl" />
        </div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6 flex justify-center">
          <ChessPiece
            piece="king"
            className="text-[#FACC15] text-7xl animate-pulse"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block">Think Ahead</span>
          <span className="text-[#FACC15]">Play Smart</span>
        </h1>
        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
          Where strategy meets excellence and champions are made
        </p>
      </div>
      {/* Animated Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#players" className="text-[#FACC15]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
