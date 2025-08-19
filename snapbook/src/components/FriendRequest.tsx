"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const mockFriendRequests = [
  {
    id: "1",
    name: "Mary Johnson",
    avatar: "/professional-female-headshot.png",
  },
  {
    id : "2",
    name : "John smith",
    avatar : ''
  }
]

export function FriendRequests() {
  const [requests, setRequests] = useState(mockFriendRequests)

  const handleConfirm = (id: string) => {
    setRequests(requests.filter((req) => req.id !== id))
    // Handle confirm logic
  }

  const handleDelete = (id: string) => {
    setRequests(requests.filter((req) => req.id !== id))
    // Handle delete logic
  }

  return (
    <div className=" p-4 md:p-6 rounded-lg shadow-sm bg-white dark:bg-black">
      <h3 className="text-base md:text-lg font-semibold mb-4">Friend Requests</h3>

      {requests.length === 0 ? (
        <p className="text-muted-foreground text-xs md:text-sm">No pending friend requests</p>
      ) : (
        <div className="space-y-3 md:space-y-4 w-full">
          {requests.map((request) => (
            <div key={request.id} className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <Avatar className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                  <AvatarImage src={request.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs md:text-sm">
                    {request.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm md:text-base truncate">{request.name}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleConfirm(request.id)}
                  className="flex-1 hover:bg-green-800 cursor-pointer bg-green-900 text-green-50 text-xs md:text-sm h-8 md:h-9"
                >
                  Confirm
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(request.id)}
                  className="flex-1 text-xs md:text-sm h-8 md:h-9 border border-red-800 text-red-800 hover:bg-red-800 cursor-pointer hover:text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
