'use client'
import React, { useState } from 'react'
import { categories } from '@/utility/categories'
import Link from 'next/link'
import { PiBankFill } from "react-icons/pi";
import { GiAirplaneDeparture } from "react-icons/gi";

import { FaCar } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { PiTShirtBold } from "react-icons/pi";
import { GiLaptop } from "react-icons/gi";

import { IoIosFitness } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";





const Categories = () => {


    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    return (
        <>


            <section className='bg-[#FCFBF3] px-20 py-10'>
                <div className='flex flex-wrap justify-between items-center'>

                    <h1 className='font-bold text-2xl '>Explore Categories</h1>
                    <Link href={'/categories'} className='px-5 py-3 rounded-full bg-blue-200 text-blue-700 font-semibold text-lg'>View All </Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center lg:items-center gap-5 py-5'>
                    <Link href={`/categories/bank`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <PiBankFill className='text-3xl' />
                            <h2 className='font-medium text-lg'>Bank</h2>

                        </div>

                    </Link>


                    <Link href={`/categories/tranvelInsuranceCompany`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <GiAirplaneDeparture className='text-3xl' />
                            <h2 className='font-medium text-lg'>Travel Insurance Company</h2>

                        </div>

                    </Link>


                    <Link href={`/categories/cardealer`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <FaCar className='text-3xl' />
                            <h2 className='font-medium text-lg'>Travel Insurance Company</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/furnitureStore`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <LuSofa className='text-3xl' />
                            <h2 className='font-medium text-lg'>Furniture Store</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/jewleryStore`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <IoDiamondOutline className='text-3xl' />
                            <h2 className='font-medium text-lg'>Jewelry Store</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/clothingStore`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <PiTShirtBold className='text-3xl' />
                            <h2 className='font-medium text-lg'>Clothing Store</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/electronicsTechnology`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <GiLaptop className='text-3xl' />
                            <h2 className='font-medium text-lg'>Electronics & Technology</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/fitnessAndNutrition`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <IoIosFitness className='text-3xl' />
                            <h2 className='font-medium text-lg'>Fitness & Nutrition Services</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/petStore`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <MdOutlinePets className='text-3xl' />

                            <h2 className='font-medium text-lg'>Pet Store</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/energySupplier`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <FaCar className='text-3xl' />
                            <h2 className='font-medium text-lg'>Energy Supplier</h2>

                        </div>

                    </Link>




                    <Link href={`/categories/realEstatateAgency`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <FaCar className='text-3xl' />
                            <h2 className='font-medium text-lg'>Real Estate Agents</h2>

                        </div>

                    </Link>



                    <Link href={`/categories/insuranceAgency`}>
                        <div className='flex items-center gap-3 bg-white rounded-md border hover:scale-y-110  p-7  duration-300 hover:shadow-xl hover:bg-gray-100' >
                            <FaCar className='text-3xl' />
                            <h2 className='font-medium text-lg'>Insurance Agency</h2>

                        </div>

                    </Link>
                </div>
            </section>
        </>
    )
}

export default Categories