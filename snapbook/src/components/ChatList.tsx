"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  isOnline: boolean
}

const mockChats: Chat[] = [
  {
    id: "1",
    name: "Alex Smith",
    avatar: "/male-professional-headshot.png",
    lastMessage: "Hey! How are you doing?",
    timestamp: "2m",
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: "2",
    name: "Mary Johnson",
    avatar: "/professional-female-headshot.png",
    lastMessage: "Thanks for accepting my friend request!",
    timestamp: "1h",
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: "3",
    name: "Sarah Wilson",
    avatar: "/professional-female-headshot.png",
    lastMessage: "See you at the meeting tomorrow",
    timestamp: "3h",
    unreadCount: 1,
    isOnline: false,
  },
  {
    id: "4",
    name: "Mike Davis",
    avatar: "/professional-male-headshot.png",
    lastMessage: "Great job on the presentation!",
    timestamp: "1d",
    unreadCount: 0,
    isOnline: false,
  },
]

export default function ChatList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  const filteredChats = mockChats.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-600">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat.id)}
            className={`p-4 border-b border-gray-100 dark:border-gray-600 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedChat === chat.id ? "bg-green-50 border-l-4 border-l-green-600" : ""
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                  <AvatarFallback>
                    {chat.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {chat.isOnline && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-50 truncate">{chat.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-100">{chat.timestamp}</span>
                    {chat.unreadCount > 0 && (
                      <Badge className="bg-green-600 hover:bg-green-700 text-white text-xs px-2 py-1">
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
