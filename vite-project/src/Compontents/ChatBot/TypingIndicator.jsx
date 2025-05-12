import React from 'react'

const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fadeIn">
      <div className="bg-gray-800/80 p-4 rounded-2xl rounded-tl-none border border-gray-700/30">
        <div className="flex space-x-2">
          {[0, 200, 400].map((delay) => (
            <div
              key={delay}
              className="w-2 h-2 rounded-full bg-yellow-500/50 animate-bounce"
              style={{
                animationDelay: `${delay}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator
