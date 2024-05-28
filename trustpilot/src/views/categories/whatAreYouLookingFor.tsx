import React from 'react'
import { FaSearch } from 'react-icons/fa'

const WhatAreYouLookingFor = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center bg-[#F1F1E8] py-10 px-1 lg:p-20 gap-5'>
                <h1 className='text-4xl font-bold text-center'>What are you looking for?</h1>
                <span className='border px-4 py-2 flex items-center bg-white gap-3 w-1/2 active:outline'>
                    <FaSearch className='text-gray-500' />
                    <input type="text" placeholder='Search' className='outline-none w-full' />
                </span>
            </div>
        </section>
    )
}

export default WhatAreYouLookingFor