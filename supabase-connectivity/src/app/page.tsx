'use client'
import { useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
export default async function Page() {


  const getUser = async () => {
  
    const {  data , error   } = await supabase.auth.getUser()
    
    // const { data, error } = await supabase.from("ping").select("*")
    // if (!user) {
      //   return <div className="flex justify-center items-center py-5">
      //     <span className="bg-red-900 text-red-200 p-2">
      //     Error Occured
      
      //     </span>
      //   </div>
      // }
    
      console.log(data)
      console.log(error)
  }

  useEffect( () => {
      getUser()
    
  })



  return (
    <>
        <main>
          <h1 className="text-4xl font-bold p-5 text-center">Home Page</h1>
        </main>
    </>
  )
}