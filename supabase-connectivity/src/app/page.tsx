import { createClient, isSupabaseConfigured } from "../../lib/supabase/server"
import { redirect } from "next/navigation"

export default async function Page() {
 const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // const { data, error } = await supabase.from("ping").select("*")
  if (!data) {
    return <div className="flex justify-center items-center py-5">
      <span className="bg-red-900 text-red-200 p-2">
      Error Occured

      </span>
    </div>
  }

  return (
    <ul>
        {JSON.stringify(data, null , 2)}
    </ul>
  )
}