"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FriendsSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg border border-border">
      <h2 className="text-lg font-semibold mb-4">Find Friends</h2>
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for friends by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted border-border"
          />
        </div>
        <Button type="submit" className="bg-green-950 hover:bg-green-900  dark:text-green-50">
          <Search className="w-4 h-4" />
        </Button>
      </form>
    </div>
  )
}
