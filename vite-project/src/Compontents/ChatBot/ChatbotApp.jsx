import React from 'react'
import ChatAssistant from './ChatAssistant'
export function ChatbotApp() {
  const userName = 'John'
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1a2744]">
      <div className="w-full flex justify-center items-center p-4">
        <ChatAssistant userName={userName} />
      </div>
    </div>
  )
}
