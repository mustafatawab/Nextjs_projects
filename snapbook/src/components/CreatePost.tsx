"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Smile } from "lucide-react"
import Image from "next/image"

export function CreatePost() {
  const [postText, setPostText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post creation
    console.log("Creating post:", postText)
    setPostText("")
  }

  return (
    <div className=" p-4 md:p-6 rounded-lg  shadow-sm bg-white dark:bg-black">
      <h3 className="text-lg font-semibold mb-4">Create Post</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2 md:gap-3">
          <Avatar className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
            <AvatarImage src="/professional-headshot.png" />
            <AvatarFallback className="text-xs md:text-sm"><Image src={"/profile.jpg"} width={200} height={200} alt=""/></AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="What's on your mind, John?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 min-h-[60px] md:min-h-[80px] resize-none border-border bg-muted text-sm md:text-base"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              <ImageIcon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Photo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              <Smile className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Feeling/Activity
            </Button>
          </div>

          <Button
            type="submit"
            disabled={!postText.trim()}
            className="bg-green-800 hover:bg-green-950 w-full sm:w-auto text-sm md:text-base"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  )
}
