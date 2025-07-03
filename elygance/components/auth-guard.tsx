"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

interface AuthGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="container px-4 py-12 mx-auto text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!user) {
    return (
      fallback || (
        <div className="container px-4 py-12 mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Authentication Required</h1>
          <p className="text-muted-foreground mb-6">Please sign in to access this page.</p>
          <div className="space-x-4">
            <button
              onClick={() => router.push("/sign-in")}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push("/register")}
              className="border border-input px-4 py-2 rounded-md hover:bg-accent"
            >
              Register
            </button>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}
