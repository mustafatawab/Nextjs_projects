import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const friends = [
  { id: "1", name: "Alex Smith", avatar: "/male-professional-headshot.png", mutualFriends: 12 },
  { id: "2", name: "Sarah Johnson", avatar: "/professional-female-headshot.png", mutualFriends: 8 },
  { id: "3", name: "Mike Wilson", avatar: "/placeholder.svg?key=mike", mutualFriends: 15 },
  { id: "4", name: "Emma Davis", avatar: "/placeholder.svg?key=emma", mutualFriends: 6 },
  { id: "5", name: "David Brown", avatar: "/placeholder.svg?key=david", mutualFriends: 9 },
  { id: "6", name: "Lisa Chen", avatar: "/placeholder.svg?key=lisa", mutualFriends: 11 },
  { id: "7", name: "James Miller", avatar: "/placeholder.svg?key=james", mutualFriends: 7 },
  { id: "8", name: "Anna Wilson", avatar: "/placeholder.svg?key=anna", mutualFriends: 13 },
]

export default function ProfileFriends() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {friends.map((friend) => (
        <div key={friend.id} className="bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={friend.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {friend.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{friend.name}</h4>
              <p className="text-sm text-muted-foreground">{friend.mutualFriends} mutual friends</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            View Profile
          </Button>
        </div>
      ))}
    </div>
  )
}
