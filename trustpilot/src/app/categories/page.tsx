import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Categories = () => {
    return (

        <section>
            <div className='flex flex-col justify-center items-center bg-[#F1F1E8] p-20'>
                <h1 className='text-3xl font-bold text-center'>What are you looking for?</h1>
                <span className='border px-4 py-2 flex items-center bg-white gap-3 w-1/3'>
                    <FaSearch className='text-gray-500' />
                    <input type="text" placeholder='Search' className='outline-none w-full'/>
                </span>
            </div>
        </section>
    )
}

export default Categories