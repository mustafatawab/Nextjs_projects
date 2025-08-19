"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"

interface Post {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
}

export function PostCard({ post }: { post: Post }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <div className=" p-6 rounded-lg shadow-sm bg-white dark:bg-black">
      <div className="flex flex-wrap items-start gap-3 mb-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
          <AvatarFallback>
            {post.author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-semibold text-foreground">{post.author.name}</h4>
            <span className="text-muted-foreground text-sm">{post.timestamp}</span>
          </div>
        </div>
      </div>

      <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-border">
        <div className="flex flex-wrap gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`text-muted-foreground hover:text-foreground ${
              isLiked ? "text-red-500 hover:text-red-600" : ""
            }`}
          >
            <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
            Like {likeCount}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <MessageCircle className="w-4 h-4 mr-2" />
            Comment {post.comments}
          </Button>
        </div>
      </div>
    </div>
  )
}
