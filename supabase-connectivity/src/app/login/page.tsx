'use client'
import React, { useState } from 'react'
import { supabase } from '../../../lib/supabase/supabase'

const page = () => {
    // loading
    const [loading , setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<{
        email: string;
        password: string;
    }>({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        const {data : user , error} = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
        });

        if (error) {
            console.error('Error logging in:', error.message);
            alert('Login failed: ' + error.message);
        } else {
            console.log('User logged in:', user);
            alert('Login successful!');
            // Redirect or perform any other action after successful login
            // window.location.href = '/';
        }

        if(loading) {
            return <div className='text-3xl font-bold text-center'>Loading</div>
        }
        setLoading(false)

    };
    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <input type="email" onChange={handleChange} name="email" id="email" className="border border-gray-300 p-2 rounded mb-4"/>
                <input type="password" onChange={handleChange} name="password" id="password" className="border border-gray-300 p-2 rounded mb-4"/>
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
                <p className='text-gray-500'>Don't have an account? <a href="/register" className='text-blue-500'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default page