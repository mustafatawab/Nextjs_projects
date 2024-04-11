import React from 'react'
import { reviews } from '@/utility/reviews'
import stars1 from "@/assets/images/stars-1.svg"
import stars2 from "@/assets/images/stars-2.svg"
import stars3 from "@/assets/images/stars-3.svg"
import stars4 from "@/assets/images/stars-4.svg"
import stars5 from "@/assets/images/stars-5.svg"
import profile from "@/assets/images/profile.jpeg"
import Image from 'next/image'
import Link from 'next/link'

const Reviews = () => {

    return (
        <>

            <section className='bg-[#FCFBF3]'>

                <h1 className='font-bold text-3xl text-center py-5'>Recent Reviews</h1>
                <div className=''>



                    <div className='grid grid-cols-5 gap-5 p-5'>
                        {reviews.map((review, i) => <div key={i} className='bg-white border p-5 space-y-2'>
                            <div className='flex justify-start items-center gap-5'> <Image src={profile} alt='profile' width={50} height={50} className='rounded-full' />
                                {review.stars == 1 && <Image src={stars1} alt='' width={100} />}
                                {review.stars == 2 && <Image src={stars2} alt='' width={100} />}
                                {review.stars == 3 && <Image src={stars3} alt='' width={100} />}
                                {review.stars == 4 && <Image src={stars4} alt='' width={100} />}
                                {review.stars == 5 && <Image src={stars5} alt='' width={100} />}
                            </div>
                            <p> <Link href='#'> <b> user1</b> </Link> reviewed <Link href='#'><b> user3 </b> </Link></p>
                            <p>{review.review}</p>

                        </div>)}

                    </div>
                </div>

            </section>
        </>
    )
}

export default Reviews