import React from 'react'
import {TbBrandProducthunt} from 'react-icons/tb'
import {CiPen} from 'react-icons/ci'
import {BiCarousel} from 'react-icons/bi'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import PrimaryButton from '@/app/components/primaryButton'

function Services() {
  return (
    <div className='p-10 flex justify-between gap-20 items-center'>

        <div className=' grid grid-cols-2 gap-5'>
            <div className='group rounded-3xl p-10 bg-[#25262A]  text-center space-y-3 hover:bg-[#64F4AB] hover:shadow-md hover:shadow-[#64F4AB] duration-300'>
                <TbBrandProducthunt className='text-[#64F4AB] group-hover:text-white text-6xl m-auto'/>
                <h1 className='text-3xl font-semibold'>Product Design</h1>
                <p>The Technological revolution is changing aspect</p>
            </div>
            <div className=' group rounded-3xl p-10 bg-[#25262A] text-center space-y-3 hover:bg-[#64F4AB] hover:shadow-md hover:shadow-[#64F4AB] duration-300 mt-5'>
                <CiPen className='text-[#64F4AB] group-hover:text-white text-6xl m-auto'/>
                <h1 className='text-3xl font-semibold'>Logo Design</h1>
                <p>The technological revolution is changing aspect</p>
            </div>
            <div className='group rounded-3xl p-10 bg-[#25262A] text-center space-y-3 hover:bg-[#64F4AB] hover:shadow-md hover:shadow-[#64F4AB] duration-300'>
                <BiCarousel className='text-[#64F4AB] group-hover:text-white text-6xl m-auto'/>
                <h1 className='text-3xl font-semibold'>UI Design</h1>
                <p>The Technological revolution is changing aspect</p>
            </div>
            <div className='group rounded-3xl p-10 bg-[#25262A] text-center space-y-3 hover:bg-[#64F4AB] hover:shadow-md hover:shadow-[#64F4AB] duration-300'>
                <IoIosCheckmarkCircleOutline className='text-[#64F4AB] group-hover:text-white text-6xl m-auto'/>
                <h1 className='text-3xl font-semibold'>Icon Design</h1>
                <p>The Technological revolution is changing aspect</p>
            </div>
        </div>
        <div className='w-1/2 space-y-4 '>
            <p  className='text-[#64F4AB]'>My Skills</p>
            <h1 className='text-3xl font-bold'>Why Hire Me For The Next Project?</h1>
            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
            <PrimaryButton text='Download CV' link='/'/>
        </div>
    </div>
  )
}

export default Services