"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    // In a real app, you would send this to your API
    toast({
      title: "Subscribed!",
      description: "You have successfully subscribed to our newsletter.",
    })

    setEmail("")
  }

  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-[600px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
          <p className="text-muted-foreground">
            Subscribe to our newsletter to receive updates on new fragrances, exclusive offers, and more.
          </p>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
