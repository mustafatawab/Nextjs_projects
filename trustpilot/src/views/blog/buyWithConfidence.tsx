import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import image1 from '../../assets/images/Who_does_DC_Trust__1_.jpeg'
import image2 from '../../assets/images/Who_does_Philly_Trust.jpeg'
import image3 from '../../assets/images/product-reviews.webp'
import image4 from '../../assets/images/TP_Industries_12.webp'
import Wrapper from '@/components/wrapper'
import getBlogs from '@/utility/getBlogData'

const BuyWithConfidence = async () => {
    // const blogs = await getBlogs();
    // console.log(blogs)
    return (
        <>
            <Wrapper>

                <section className='py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='text-3xl font-semibold'>Buy With Confidence</h4>
                        {/* <Link className='text-blue-700 text-lg font-semibold' href='/blog/buy-wit-confidence'>See more articles</Link> */}
                    </div>


                    <main className='py-5 flex flex-wrap xl:flex-nowrap justify-between gap-10'>
                        <Link href={'blog/buy-with-confidence/Who does D.C. trust with big financial decisions?'}>
                            <div className='  basis-1/4 rounded-2xl flex justify-center items-center'>
                                <div className='w-full space-y-2'>
                                    <Image src={image1} alt='' className='rounded-xl w-full h-60' />
                                    <p>
                                        <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Buy With Confidence</Link>

                                    </p>
                                    <h3 className='text-2xl font-semibold '>Who does D.C. trust with big financial decisions?</h3>
                                    <p className='text-[#696A6A] font-light'>March 29, 2024</p>
                                </div>
                            </div>

                        </Link>


                        <Link href={'blog/buy-with-confidence/Who does D.C. trust with big financial decisions?'}>
                            <div className='  basis-1/4 rounded-2xl flex justify-center items-center'>
                                <div className='w-full space-y-2'>
                                    <Image src={image2} alt='' className='rounded-xl w-full h-60' />
                                    <p>

                                        <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Buy With Confidence</Link>
                                    </p>

                                    <h3 className='text-2xl font-semibold '>Who does Philadelphia trust with big financila decisions?</h3>
                                    <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                                </div>
                            </div>
                        </Link>


                        <Link href={'blog/buy-with-confidence/4 Tips for sharing perfect product review photos'}>

                            <div className=' basis-1/4 rounded-2xl flex justify-center items-center'>
                                <div className='w-full space-y-2'>
                                    <Image src={image3} alt='' className='rounded-xl w-full h-60' />
                                    <p>

                                        <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Buy With Confidence</Link>
                                    </p>

                                    <h3 className='text-2xl font-semibold '>4 Tips for sharing perfect product review photos</h3>
                                    <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                                </div>
                            </div>
                        </Link>


                        <Link href={'blog/buy-with-confidence/5 Types of insurance to keep you and your assets safe'}>

                            <div className='  basis-1/4 rounded-2xl flex justify-center items-center'>
                                <div className='w-full space-y-2'>

                                    <Image src={image4} alt='' className='rounded-xl w-full h-60' />
                                    <p>

                                        <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Buy With Confidence</Link>
                                    </p>
                                    <h3 className='text-2xl font-semibold '>5 Types of insurance to keep you and your assets safe</h3>
                                    <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                                </div>
                            </div>
                        </Link>

                    </main>
                </section>

            </Wrapper>
        </>
    )
}

export default BuyWithConfidence