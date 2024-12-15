"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThumbsUp, ThumbsDown, Send } from 'lucide-react'

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 1,
        text: "Thank you for your question. I'm processing your request...",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-white rounded-lg shadow-lg">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-100 text-blue-900"
                  : "bg-green-100 text-green-900"
              }`}
            >
              {message.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {message.timestamp.toLocaleTimeString()}
            </div>
            {message.sender === "bot" && (
              <div className="mt-1">
                <Button variant="ghost" size="sm" className="mr-1">
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </ScrollArea>
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex items-center"
        >
          <Input
            type="text"
            placeholder="Ask NelsonBot about your child's health..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow mr-2"
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}

