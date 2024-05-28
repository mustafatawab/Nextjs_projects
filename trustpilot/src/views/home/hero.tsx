import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import heroImage from '@/assets/images/hero-image.jpeg'

const HeroSection = () => {
    return (
        <>
            <section className='bg-[#04da8d] flex flex-wrap justify-center  items-center z-10 overflow-hidden py-10 w-full px-5 lg:px-0'>

                <div className='space-y-5'>
                    <h1 className='font-bold text-5xl my-5'>
                        Read reviews. Write reviews. <br />
                        Find Companies you can trust.
                    </h1>
                    <span className='bg-white p-2 text-xl rounded-full  w-full flex justify-between'>
                        <input className='outline-none rounded-full px-6 ' type="text" placeholder='Company or Category' />
                        <Button className='bg-blue-700 rounded-full px-10 py-6 hover:bg-[#A6C0F0] hover:text-black font-semibold text-xl'>Search</Button>
                        {/* <button className='bg-blue-700'>Search</button>  */}
                    </span>
                </div>


                <div className='lg:-mr-[750px] hidden md:block' >
                    <Image
                        src={heroImage}
                        alt=''
                        className=''
                        height={400}

                    />
                </div>

            </section>
        </>
    )
}

export default HeroSection