"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Search } from "lucide-react"

interface Friend {
  id: string
  name: string
  avatar: string
  isOnline: boolean
}

const mockFriends: Friend[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/professional-headshot.png",
    isOnline: true,
  },
  {
    id: "2",
    name: "Emma Wilson",
    avatar: "/professional-female-headshot.png",
    isOnline: false,
  },
  {
    id: "3",
    name: "David Brown",
    avatar: "/professional-male-headshot.png",
    isOnline: true,
  },
]

export default function NewChatDialog() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFriends = mockFriends.filter((friend) => friend.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleStartChat = (friend: Friend) => {
    // In a real app, this would create a new chat or navigate to existing one
    console.log("Starting chat with:", friend.name)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="h-4 w-4 mr-1" />
          New Chat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start a new conversation</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Friends List */}
          <div className="max-h-60 overflow-y-auto space-y-2">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                onClick={() => handleStartChat(friend)}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                    <AvatarFallback>
                      {friend.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {friend.isOnline && (
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{friend.name}</h3>
                  <p className="text-sm text-gray-500">{friend.isOnline ? "Active now" : "Offline"}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredFriends.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No friends found</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
