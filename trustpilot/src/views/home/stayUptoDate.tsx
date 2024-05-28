import { BanknoteIcon, Box } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '../../assets/images/TP_Industries_12.webp'
import image2 from '../../assets/images/Who_does_DC_Trust__1_.jpeg'
import image3 from '../../assets/images/Who_does_Philly_Trust.jpeg'
import image4 from '../../assets/images/product-reviews.webp'


const StayUptoDate = () => {
    return (
        <>
            <section className='bg-white p-32'>
                <div className='flex justify-between items-center '>
                    <h2 className='text-3xl font-bold'>Stay up to date</h2>
                    <Link href={'/blog'} className='px-5 py-3 rounded-full bg-blue-200 text-blue-700 font-semibold text-lg'>See All</Link>
                </div>


                <main className='py-5 flex justify-between gap-10'>
                    
                    <div className='bg-[#F1F1E8] p-5 basis-1/4 rounded-2xl flex justify-center items-center'>
                        <div className='w-full space-y-2'>
                            <Image src={image1} alt='' className='rounded-xl w-full h-[250px]' />
                            <p className='text-[#1C1C1C]'>Buy With Confidence</p>
                            <h3 className='text-2xl font-semibold '>Who does D.C. trust with big financial decisions?</h3>
                            <p className='text-[#696A6A] font-light'>March 29, 2024</p>
                        </div>
                    </div>

                    <div className='bg-[#F1F1E8] p-5 basis-1/4 rounded-2xl flex justify-center items-center'>
                        <div className='w-full space-y-2'>
                            <Image src={image2} alt='' className='rounded-xl w-full h-[250px]' />
                            <p className='text-[#1C1C1C]'>Buy With Confidence</p>
                            <h3 className='text-2xl font-semibold '>Who does Philadelphia trust with big financila decisions?</h3>
                            <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                        </div>
                    </div>

                    <div className='bg-[#F1F1E8] p-5 basis-1/4 rounded-2xl flex justify-center items-center'>
                        <div className='w-full space-y-2'>
                            <Image src={image3} alt='' className='rounded-xl w-full h-[250px]' />
                            <p className='text-[#1C1C1C]'>Buy With Confidence</p>
                            <h3 className='text-2xl font-semibold '>4 Tips for sharing perfect product review photos</h3>
                            <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                        </div>
                    </div>

                    <div className='bg-[#F1F1E8] p-5 basis-1/4 rounded-2xl flex justify-center items-center'>
                        <div className='w-full space-y-2'>

                            <Image src={image4} alt='' className='rounded-xl w-full h-[250px]' />
                            <p className='text-[#1C1C1C]'>Buy With Confidence</p>
                            <h3 className='text-2xl font-semibold '>5 Types of insurance to keep you and your assets safe</h3>
                            <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                        </div>
                    </div>

                </main>
            </section>

        </>
    )
}

export default StayUptoDate