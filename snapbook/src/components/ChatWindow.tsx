"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Phone, Video, MoreVertical } from "lucide-react"

interface Message {
  id: string
  content: string
  timestamp: string
  isOwn: boolean
}

interface ChatWindowProps {
  chatId: string
  chatName: string
  chatAvatar: string
  isOnline: boolean
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hey! How are you doing?",
    timestamp: "10:30 AM",
    isOwn: false,
  },
  {
    id: "2",
    content: "I'm doing great! Just finished working on a new project. How about you?",
    timestamp: "10:32 AM",
    isOwn: true,
  },
  {
    id: "3",
    content: "That sounds awesome! I'd love to hear more about it sometime.",
    timestamp: "10:33 AM",
    isOwn: false,
  },
  {
    id: "4",
    content: "Let's catch up soon. Are you free this weekend?",
    timestamp: "10:35 AM",
    isOwn: true,
  },
]

export default function ChatWindow({ chatId, chatName, chatAvatar, isOnline }: ChatWindowProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(mockMessages)

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={chatAvatar || "/placeholder.svg"} alt={chatName} />
                <AvatarFallback>
                  {chatName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {isOnline && (
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{chatName}</h2>
              <p className="text-sm text-gray-500">{isOnline ? "Active now" : "Last seen recently"}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                msg.isOwn ? "bg-green-600 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className={`text-xs mt-1 ${msg.isOwn ? "text-green-100" : "text-gray-500"}`}>{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700 text-white" size="sm">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
