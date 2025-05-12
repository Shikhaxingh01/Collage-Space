import React, { useEffect, useState, useRef } from 'react'
import {
  SmileIcon,
  PaperclipIcon,
  MicIcon,
  SendIcon,
  BotIcon,
} from 'lucide-react'
import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'
import { useUser } from '@/hooks/useUser'

const ChatAssistant = ({ userName }) => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const {user ,loading ,error} = useUser();

  useEffect(() => {
    const welcomeMessage = {
      id: 'welcome',
      content: `Welcome to College Space AI! I'm here to help you with any questions about courses, campus life, or academic support. How can I assist you today?`,
      sender: 'bot',
      timestamp: new Date(),
    }
    setMessages([welcomeMessage])
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content:
          'Thanks for your message! This is a demo response from your College Space assistant.',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    loading?"Loading...":
    <div className="w-full max-w-4xl bg-[#0F172A]/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.25)] border border-gray-800/50">
      <div className="p-8 flex flex-col items-center text-center border-b border-gray-800/50 bg-gradient-to-b from-gray-800/20 to-transparent">
        <div className="w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center mb-4 shadow-lg border border-gray-700/50 transform transition-transform hover:scale-105">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center backdrop-blur-sm">
            <BotIcon className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Hi,  {user.firstName}
        </h2>
        <h3 className="text-xl text-gray-300 mb-3">
          Can I help you with anything?
        </h3>
        <p className="text-sm text-gray-400 max-w-md">
          Ready to assist you with anything you need—from answering questions to
          giving recommendations.
        </p>
      </div>

      <div className="p-6 h-[400px] overflow-y-auto flex flex-col space-y-4 bg-gradient-to-b from-transparent to-gray-900/20">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-800/50 bg-gray-900/20 backdrop-blur-sm">
        <div className="relative flex items-center bg-gray-800/40 rounded-xl shadow-inner border border-gray-700/30">
          <button className="p-3 text-gray-400 hover:text-yellow-500 transition-all hover:scale-110">
            <SmileIcon size={20} />
          </button>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent border-none outline-none text-white resize-none py-3 px-2 max-h-32 placeholder-gray-500"
            rows={1}
          />
          <div className="flex items-center gap-1 pr-2">
            <button className="p-2 text-gray-400 hover:text-yellow-500 transition-all hover:scale-110">
              <PaperclipIcon size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-yellow-500 transition-all hover:scale-110">
              <MicIcon size={20} />
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-yellow-500"
            >
              <SendIcon size={18} />
            </button>
          </div>
        </div>
        <div className="mt-3 text-xs text-center text-gray-500">
          College Space AI respects your privacy and won't store personal
          information.
        </div>
      </div>
    </div>
  )
}

export default ChatAssistant
