import React from 'react'
import { LinkIcon, ImageIcon } from 'lucide-react'

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot'

  const containsUrl = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return urlRegex.test(text)
  }

  const formatContent = (content) => {
    if (!containsUrl(content)) {
      return <p>{content}</p>
    }
    return (
      <div>
        <p>{content}</p>
        <div className="mt-2 p-3 bg-gray-800 rounded-lg flex items-center">
          <LinkIcon size={16} className="text-yellow-500 mr-2" />
          <span className="text-sm text-gray-300">
            Link detected in message
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}>
      <div
        className={`max-w-[80%] p-4 rounded-2xl shadow-lg transition-all hover:shadow-xl ${
          isBot
            ? 'bg-gray-800/80 text-white rounded-tl-none border border-gray-700/30'
            : 'bg-yellow-500 text-gray-900 rounded-tr-none'
        }`}
      >
        {formatContent(message.content)}
      </div>
    </div>
  )
}

export default ChatMessage
