import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import image1 from '../../assets/images/Who_does_DC_Trust__1_.jpeg'
import image2 from '../../assets/images/Who_does_Philly_Trust.jpeg'
import image3 from '../../assets/images/product-reviews.webp'
import image4 from '../../assets/images/TP_Industries_12.webp'
import Wrapper from '@/components/wrapper'

const ReviewsMatter = () => {
    return (

        <>
            <Wrapper>

                <section className='py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='text-3xl font-semibold'>Reviews Matter</h4>
                        <Link className='text-blue-700 text-lg font-semibold' href='/blog/reviews-matter'>See more articles</Link>
                    </div>


                    <main className='py-5 flex flex-wrap xl:flex-nowrap justify-between gap-10'>

                        <div className='  basis-1/4 rounded-2xl flex justify-center items-center'>
                            <div className='w-full space-y-2'>
                                <Image src={image1} alt='' className='rounded-xl w-full h-60' />
                                <p>
                                    <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Reviews Matter</Link>

                                </p>
                                <h3 className='text-2xl font-semibold '>Who does D.C. trust with big financial decisions?</h3>
                                <p className='text-[#696A6A] font-light'>March 29, 2024</p>
                            </div>
                        </div>

                        <div className='  basis-1/4 rounded-2xl flex justify-center items-center'>
                            <div className='w-full space-y-2'>
                                <Image src={image2} alt='' className='rounded-xl w-full h-60' />
                                <p>

                                    <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Reviews Matter</Link>
                                </p>

                                <h3 className='text-2xl font-semibold '>Who does Philadelphia trust with big financila decisions?</h3>
                                <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                            </div>
                        </div>

                        <div className=' basis-1/4 rounded-2xl flex justify-center items-center'>
                            <div className='w-full space-y-2'>
                                <Image src={image3} alt='' className='rounded-xl w-full h-60' />
                                <p>

                                    <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Reviews Matter</Link>
                                </p>

                                <h3 className='text-2xl font-semibold '>4 Tips for sharing perfect product review photos</h3>
                                <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                            </div>
                        </div>
                        <div className='  basis-1/4 rounded-2xl flex justify-center items-center'>
                            <a href={`/blog/reviews-matter`}>
                                <div className='w-full space-y-2'>

                                    <Image src={image4} alt='' className='rounded-xl w-full h-60' />
                                    <p>

                                        <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Reviews Matter</Link>
                                    </p>
                                    <h3 className='text-2xl font-semibold '>5 Types of insurance to keep you and your assets safe</h3>
                                    <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                                </div>
                            </a>
                        </div>

                    </main>
                </section>
            </Wrapper>
        </>
    )
}

export default ReviewsMatter