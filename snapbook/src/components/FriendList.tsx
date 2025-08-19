"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, UserMinus, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mockFriends = [
  {
    id: "1",
    name: "Alex Smith",
    avatar: "/male-professional-headshot.png",
    status: "online",
    mutualFriends: 12,
    lastActive: "Active now",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "/professional-female-headshot.png",
    status: "offline",
    mutualFriends: 8,
    lastActive: "2 hours ago",
  },
  {
    id: "3",
    name: "Mike Wilson",
    avatar: "/professional-male-headshot.png",
    status: "online",
    mutualFriends: 15,
    lastActive: "Active now",
  },
  {
    id: "4",
    name: "Emma Davis",
    avatar: "/professional-female-headshot.png",
    status: "offline",
    mutualFriends: 6,
    lastActive: "1 day ago",
  },
]

export default function FriendsList() {
  const [friends, setFriends] = useState(mockFriends)
  const [filter, setFilter] = useState<"all" | "online" | "offline">("all")

  const filteredFriends = friends.filter((friend) => {
    if (filter === "all") return true
    return friend.status === filter
  })

  const handleRemoveFriend = (id: string) => {
    setFriends(friends.filter((friend) => friend.id !== id))
  }

  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Your Friends ({friends.length})</h2>
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-green-950 hover:bg-green-900 dark:text-green-50" : "dark:text-green-50 text-green-950 hover:bg-green-50 border border-green-950"}
          >
            All
          </Button>
          <Button
            variant={filter === "online" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("online")}
            className={filter === "online" ? "bg-green-950 hover:bg-green-900 dark:text-green-50" : "dark:text-green-50 text-green-950 hover:bg-green-50 border border-green-950"}
          >
            Online
          </Button>
          <Button
            variant={filter === "offline" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("offline")}
            className={filter === "offline" ? "bg-green-950 hover:bg-green-900 dark:text-green-50" : "dark:text-green-50 text-green-950 hover:bg-green-50 border border-green-950"}
          >
            Offline
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredFriends.map((friend) => (
          <div
            key={friend.id}
            className="flex flex-wrap items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {friend.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {friend.status === "online" && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-card rounded-full"></div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-foreground">{friend.name}</h3>
                <Badge variant={friend.status === "online" ? "default" : "secondary"} className={`text-xs dark:text-green-950 ${friend.status == "online" ? 'bg-green-500 text-green-50' : "bg-green-50"} `}>
                  {friend.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{friend.mutualFriends} mutual friends</p>
              <p className="text-xs text-muted-foreground">{friend.lastActive}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-green-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive" onClick={() => handleRemoveFriend(friend.id)}>
                    <UserMinus className="w-4 h-4 mr-2" />
                    Remove Friend
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
