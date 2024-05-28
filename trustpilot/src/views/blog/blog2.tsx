import Wrapper from '@/components/wrapper'
import React from 'react'
import heroImage from '../../assets/images/blog/donating-unwanted-items.webp'
import Image from 'next/image'
import Link from 'next/link'

import image1 from '../../assets/images/TP_Industries_12.webp'

import image2 from '../../assets/images/Who_does_DC_Trust__1_.jpeg'
import image3 from '../../assets/images/Who_does_Philly_Trust.jpeg'
import image4 from '../../assets/images/product-reviews.webp'
import getBlogs from '@/utility/getBlogData'
const Blog2 = async () => {

    const blogs = await getBlogs();
    console.log(blogs);
    

    return (
        <main>
            <Wrapper>

                <section className=''>
                    <h2 className='text-2xl font-semibold text-start'>Featured</h2>
                    <main className='flex justify-between items-center gap-7 flex-wrap xl:flex-nowrap'>

                        <div className='space-y-5'>
                            <p>January 31, </p>
                            <p className='text-5xl font-semibold '>Smart spring cleaning: Getting rid of unwanted household items, ethically</p>
                            <button className='p-5 bg-blue-700 font-semibold rounded-sm text-white'>Read Now</button>
                        </div>
                        <Image src={heroImage} alt='hero Image' />
                    </main>
                </section>


                <section className='py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='text-3xl font-semibold'>Trends in Trust</h4>
                        <Link className='text-blue-700 text-lg font-semibold' href='/blog/trends-in-trust'>See more articles</Link>
                    </div>



                    <div className='py-5 flex flex-wrap xl:flex-nowrap justify-between gap-10'>


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
                            <div className='w-full space-y-2'>

                                <Image src={image4} alt='' className='rounded-xl w-full h-60' />
                                <p>

                                    <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Reviews Matter</Link>
                                </p>
                                <h3 className='text-2xl font-semibold '>5 Types of insurance to keep you and your assets safe</h3>
                                <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                            </div>
                        </div>

                    </div>
                </section>




                <section className='py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='text-3xl font-semibold'>Reviews Matter</h4>
                        <Link className='text-blue-700 text-lg font-semibold' href='/blog/reviews-matter'>See more articles</Link>
                    </div>


                    <div className='py-5 flex flex-wrap xl:flex-nowrap justify-between gap-10'>


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
                            <div className='w-full space-y-2'>

                                <Image src={image4} alt='' className='rounded-xl w-full h-60' />
                                <p>

                                    <Link href={'/blog/trends-in-trust'} className=' text-blue-700 font-semibold mt-2'>Reviews Matter</Link>
                                </p>
                                <h3 className='text-2xl font-semibold '>5 Types of insurance to keep you and your assets safe</h3>
                                <p className='text-[#696A6A] font-light'>May 01, 2024</p>
                            </div>
                        </div>

                    </div>
                </section>



                <section className='py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='text-3xl font-semibold'>Buy With Confidence</h4>
                        <Link className='text-blue-700 text-lg font-semibold' href='/blog/buy-with-confidence'>See more articles</Link>
                    </div>


                    <div className='py-5 flex flex-wrap xl:flex-nowrap justify-center gap-10'>



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

                    </div>
                </section>


                <section className='py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='text-3xl font-semibold'>Trustpilot Stories</h4>
                        <Link className='text-blue-700 text-lg font-semibold' href='/blog/trustpilot-stories'>See more articles</Link>
                    </div>


                    <div className='py-5 flex flex-wrap xl:flex-nowrap justify-center gap-10'>



                        <Link href={'blog/trustpilot-stories/Who does D.C. trust with big financial decisions?'}>
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


                        <Link href={'blog/trustpilot-stories/Who does D.C. trust with big financial decisions?'}>
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


                        <Link href={'blog/trustpilot-stories/4 Tips for sharing perfect product review photos'}>

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


                        <Link href={'blog/trustpilot-stories/5 Types of insurance to keep you and your assets safe'}>

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

                    </div>
                </section>
            </Wrapper>
        </main>
    )
}

export default Blog2