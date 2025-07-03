"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { User, Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error?: string }>
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<{ error?: string }>
  signInWithGoogle: () => Promise<{ error?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Store user data in localStorage and cookies
  const storeUserData = (user: User, session: Session) => {
    if (typeof window !== "undefined") {
      // Store in localStorage
      localStorage.setItem("user_id", user.id)
      localStorage.setItem("user_email", user.email || "")
      localStorage.setItem(
        "user_data",
        JSON.stringify({
          id: user.id,
          email: user.email,
          first_name: user.user_metadata?.first_name || "",
          last_name: user.user_metadata?.last_name || "",
          full_name: user.user_metadata?.full_name || "",
          avatar_url: user.user_metadata?.avatar_url || "",
        }),
      )

      // Store in cookies (expires in 7 days)
      const expires = new Date()
      expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000)
      document.cookie = `user_id=${user.id}; expires=${expires.toUTCString()}; path=/`
      document.cookie = `user_email=${user.email || ""}; expires=${expires.toUTCString()}; path=/`
    }
  }

  // Clear user data from localStorage and cookies
  const clearUserData = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user_id")
      localStorage.removeItem("user_email")
      localStorage.removeItem("user_data")

      // Clear cookies
      document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "user_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
  }

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        setSession(session)
        setUser(session.user)
        storeUserData(session.user, session)
      }
      setLoading(false)
    }

    getSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state change:", event, session?.user?.id)

      if (session?.user) {
        setSession(session)
        setUser(session.user)
        storeUserData(session.user, session)

        // Ensure profile exists
        await ensureProfileExists(session.user)

        if (event === "SIGNED_IN") {
          toast({
            title: "Welcome!",
            description: "You have successfully signed in.",
          })
        }
      } else {
        setSession(null)
        setUser(null)
        clearUserData()

        if (event === "SIGNED_OUT") {
          toast({
            title: "Signed out",
            description: "You have been signed out successfully.",
          })
        }
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [toast])

  const ensureProfileExists = async (user: User) => {
    try {
      // Check if profile already exists
      const { data: existingProfile } = await supabase.from("profiles").select("id").eq("id", user.id).single()

      if (!existingProfile) {
        // Create profile if it doesn't exist
        const { error: profileError } = await supabase.from("profiles").insert({
          id: user.id,
          email: user.email || "",
          first_name: user.user_metadata?.first_name || user.user_metadata?.given_name || "",
          last_name: user.user_metadata?.last_name || user.user_metadata?.family_name || "",
          avatar_url: user.user_metadata?.avatar_url || "",
        })

        if (profileError) {
          console.error("Error creating profile:", profileError)
        } else {
          console.log("Profile created successfully for user:", user.id)
        }
      }
    } catch (error) {
      console.error("Error ensuring profile exists:", error)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { error: error.message }
      }

      // User data will be stored automatically via the auth state change listener
      return {}
    } catch (error) {
      console.error("Sign in error:", error)
      return { error: "An unexpected error occurred" }
    }
  }

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<{ error?: string }> => {
    try {
      console.log("Starting sign up process...")

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            full_name: `${firstName} ${lastName}`,
          },
          emailRedirectTo: undefined, // Disable email confirmation
        },
      })

      if (error) {
        console.error("Supabase auth error:", error)
        return { error: error.message }
      }

      console.log("Auth signup successful:", data)

      // With email verification disabled, user should be immediately signed in
      if (data.user && data.session) {
        console.log("User automatically signed in after signup")
        // The auth state change listener will handle storing user data and creating profile
      } else if (data.user && !data.session) {
        // This shouldn't happen with email verification disabled, but just in case
        console.log("User created but not signed in - this is unexpected")
        return { error: "Account created but automatic sign-in failed. Please try signing in manually." }
      }

      return {}
    } catch (e) {
      console.error("Unexpected sign-up error:", e)
      return { error: "An unexpected error occurred. Please try again." }
    }
  }

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error("Google sign in error:", error)
      return { error: "An unexpected error occurred" }
    }
  }

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      clearUserData()
    } catch (error) {
      console.error("Sign out error:", error)
      clearUserData() // Clear data even if sign out fails
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
