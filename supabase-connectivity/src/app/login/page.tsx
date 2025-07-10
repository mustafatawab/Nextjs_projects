'use client'
import { supabase } from '@/lib/supabase/client'
import React from 'react'



const page = () => {
    const signIn = async (e:any) => {
      e.preventDefault()
      const {data, error} = await supabase.auth.signInWithPassword({
        email: "mustafatawab09@gmail.com",
        password : "TestPassword"
      })


      console.log(data)
      console.log(error)
    }

    const oAuthLogin = async (e:any) => {
      e.preventDefault()
      const {data , error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      console.log(data)
      console.log(error)
    }


    const facebookLogin = async (e:any) => {
      e.preventDefault()
      const {data , error} = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      })
      console.log(data)
      console.log(error)
    }


    return (
    <div>
        <form action="" onSubmit={signIn} >  
            <div className='flex flex-col gap-4 w-1/2 mx-auto bg-white shadow-2xl space-y-5 p-5'>
              <input type="email" placeholder='Enter your email address'/>
              <input type="password" placeholder='Enter your Password'/>
              <button type="submit" className='bg-black text-white p-2'>Login</button>
              <button onClick={oAuthLogin} className='bg-white text-whtie my-1 rounded'>Google Login</button>
              <button onClick={facebookLogin} className='bg-blue-500 text-white'>Facebook Login</button>
            </div>
        </form>
    </div>
  )
}

export default page