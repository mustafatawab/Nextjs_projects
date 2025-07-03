"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error("Error during auth callback:", error)
          router.push("/sign-in?error=callback_error")
          return
        }

        if (data.session?.user) {
          const user = data.session.user

          // Ensure profile exists
          const { data: existingProfile } = await supabase.from("profiles").select("id").eq("id", user.id).single()

          if (!existingProfile) {
            const { error: profileError } = await supabase.from("profiles").insert({
              id: user.id,
              email: user.email || "",
              first_name: user.user_metadata?.given_name || user.user_metadata?.first_name || "",
              last_name: user.user_metadata?.family_name || user.user_metadata?.last_name || "",
              avatar_url: user.user_metadata?.avatar_url || "",
            })

            if (profileError) {
              console.error("Error creating profile in callback:", profileError)
            } else {
              console.log("Profile created successfully in callback")
            }
          }

          router.push("/")
        } else {
          router.push("/sign-in")
        }
      } catch (error) {
        console.error("Unexpected error in auth callback:", error)
        router.push("/sign-in?error=unexpected_error")
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="container px-4 py-12 mx-auto text-center">
      <h1 className="text-2xl font-bold">Completing sign in...</h1>
      <p className="text-muted-foreground mt-2">Please wait while we complete your authentication.</p>
    </div>
  )
}
