"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus, X } from "lucide-react"

const mockSuggestions = [
  {
    id: "1",
    name: "David Brown",
    avatar: "/professional-male-headshot.png",
    mutualFriends: 5,
    reason: "Works at TechCorp",
  },
  {
    id: "2",
    name: "Lisa Chen",
    avatar: "/professional-female-headshot.png",
    mutualFriends: 3,
    reason: "Mutual friends with Alex Smith",
  },
  {
    id: "3",
    name: "James Miller",
    avatar: "/professional-male-headshot.png",
    mutualFriends: 7,
    reason: "Lives in San Francisco",
  },
]

export default function FriendSuggestions() {
  const [suggestions, setSuggestions] = useState(mockSuggestions)

  const handleAddFriend = (id: string) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id))
    // Handle add friend logic
  }

  const handleDismiss = (id: string) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id))
    // Handle dismiss logic
  }

  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <h2 className="text-lg font-semibold mb-4">People You May Know</h2>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="p-4 rounded-lg border border-border">
            <div className="flex items-start gap-3 mb-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={suggestion.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {suggestion.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium text-foreground text-sm">{suggestion.name}</h3>
                <p className="text-xs text-muted-foreground">{suggestion.mutualFriends} mutual friends</p>
                <p className="text-xs text-muted-foreground">{suggestion.reason}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleDismiss(suggestion.id)}>
                <X className="w-3 h-3" />
              </Button>
            </div>

            <Button
              size="sm"
              onClick={() => handleAddFriend(suggestion.id)}
              className="w-full bg-green-950 text-green-50 hover:bg-green-900 hover:text-white"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add Friend
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
