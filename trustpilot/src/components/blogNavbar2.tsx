'use client'
import { useState } from 'react'
import Logo from '../assets/images/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

const BlogNavbar2 = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Featured", path: "/blog" },
        { title: "Trends in Trust", path: "/blog/trend-in-trust" },
        { title: "Reviews Matter", path: "/blog/reviews-matter" },
        { title: "Buy With Confidence", path: "/blog/buy-with-confidence" },
        { title: "Trustpilot Stories", path: "/blog/trustpilot-stories" },

    ]

    return (
        <nav className="bg-[#FCECE3] border-b w-full md:static md:text-sm md:border-none py-5">
            <div className=" items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block ">
                    <div className='flex  gap-6 items-center justify-start'>

                        <p className='text-2xl font-bold '>The Trustpilot Blog</p>
                        <span className='hidden w-px h-6 bg-gray-900 md:block'></span>
                    </div>

                    <div className="md:hidden px-3">

                        <button className="text-black hover:text-black"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>

                <div className={` flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'} text-center`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 text-center w-full">



                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <span className='flex justify-between items-center w-full px-6 py-4 bg-white border border-gray-300 rounded-sm text-lg'>
                                <input type="text" placeholder='Search Article' className='outline-none' />
                                <FaSearch className='text-gray-400' />
                            </span>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default BlogNavbar2