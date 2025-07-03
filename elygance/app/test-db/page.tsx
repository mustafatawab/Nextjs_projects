"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export default function TestDBPage() {
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    try {
      // Test basic connection
      const { data, error } = await supabase.from("profiles").select("count", { count: "exact", head: true })

      if (error) {
        setResult(`Error: ${error.message}`)
      } else {
        setResult(`Connection successful! Profiles table exists with ${data?.length || 0} records.`)
      }
    } catch (err) {
      setResult(`Connection failed: ${err}`)
    }
    setLoading(false)
  }

  const testAuth = async () => {
    setLoading(true)
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setResult(`Auth test: ${user ? `Logged in as ${user.email}` : "Not logged in"}`)
    } catch (err) {
      setResult(`Auth test failed: ${err}`)
    }
    setLoading(false)
  }

  return (
    <div className="container px-4 py-12 mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Database Connection Test</h1>

      <div className="space-y-4">
        <Button onClick={testConnection} disabled={loading}>
          {loading ? "Testing..." : "Test Database Connection"}
        </Button>

        <Button onClick={testAuth} disabled={loading} variant="outline">
          {loading ? "Testing..." : "Test Auth Status"}
        </Button>

        {result && (
          <div className="p-4 bg-muted rounded-lg">
            <pre className="text-sm">{result}</pre>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-card border rounded-lg">
        <h2 className="font-semibold mb-2">Environment Variables:</h2>
        <p className="text-sm">
          NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"}
        </p>
        <p className="text-sm">
          NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"}
        </p>
      </div>
    </div>
  )
}
