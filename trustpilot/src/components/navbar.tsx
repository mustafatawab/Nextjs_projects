'use client'
import { useState } from 'react'
import Logo from '../assets/images/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Categories", path: "/categories" },
        { title: "Blog", path: "/blog" },

    ]

    return (
        <nav className="bg-black border-b w-full md:static md:text-sm md:border-none py-2">
            <div className=" items-center  max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block bg-black">
                    <Link href="/">
                        <Image
                            src={Logo}
                            width={170}
                            height={50}
                            alt="Trustpilot logo"
                        />
                    </Link>

                    <div className="md:hidden bg-black px-4">
                        <button className="text-white hover:text-white"
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

                <div className={`bg-black flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'} text-center`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 text-center">
                        <div className='hidden lg:flex items-center bg-white w-96 rounded-md py-1 px-4 '>
                            <FaSearch />
                            <input type="text" placeholder='Search for a company or category' className='w-full py-2 px-4 bg-transparent outline-none' />
                        </div>
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white text-md hover:border-b-2 py-3 ">
                                        <Link href={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        {/* <span className='hidden w-px h-6 bg-gray-300 md:block'></span> */}

                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li className=' hover:border-b-2'>
                                <Link href="/login" className="text-md block py-3 text-center text-white border-white hover:border-b-2  rounded-lg md:border-none">
                                    Log in
                                </Link>
                            </li>
                            <li>
                                <Link href="https://business.trustpilot.com/?utm_medium=consumer&utm_source=for_companies&utm_campaign=consumer_cta&_gl=1*wum6ct*_ga*NjA2OTI5MjA3LjE3MTIyMTQxNjY.*_ga_11HBWMC274*MTcxNDkwOTY4Ny40MC4xLjE3MTQ5MTExMTAuNTcuMC4w" className="text-md block py-4 px-6  text-center text-black bg-[#A6C0F0] hover:bg-[#205CD4] hover:text-white active:bg-indigo-700 active:shadow-none rounded-full font-semibold shadow md:inline">
                                    For Business
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar