import BlogNavbar2 from '@/components/blogNavbar2'
import Wrapper from '@/components/wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '../../../../../assets/images/blog/donating-unwanted-items.webp'

const Page = ({ params }: { params: { blogTitle: String } }) => {
    return (
        <>
            <BlogNavbar2 />
            <Wrapper>

                <main className='px-40 text-center flex flex-col justify-center items-center space-y-5'>
                    <Link href={`/blog/trends-in-trust`} className='text-blue-700 font-semibold'>Trends In Trust</Link>
                    <h1 className='text-4xl font-semibold'>Parcel delivery scams to watch out for all year round
                    </h1>
                    <p className='text-lg '>Wednesday, January 31, 2024</p>
                    <div className='text-center flex flex-col items-center space-y-5'>

                        <Image src={image} alt='' />
                        <p>If the first few months of this year are any indication, people are still spending, despite economic challenges. The National Retail Federation says retail sales were up 4.2% year over year for the first five months of 2023.</p>
                    </div>
                    <p>

                        All that merchandise being bought and sold is not lost on scammers and with online and with other non-store sales also up year over year, delivery scams are just as popular as ever. But that doesn’t mean you need to fall victim to one. Here’s how to spot them — and steer clear.
                    </p>
                    <h3 className='text-3xl font-semibold '>Be wary of delivery scam texts</h3>
                    <p>

                        To protect your box from getting swiped off your doorstep, you might sign up for text alerts about your order and get a tracking link to keep tabs on your package. For most people, things go off without a hitch.

                        But scammers know you are probably expecting a delivery and, according to the United States Postal Inspection Service, send false texts about your package. These messages may mention something about “updating your information” and include a fake tracking link. Clicking that link takes you to a site where you upload personal information, thinking it goes to a legitimate delivery and logistics company. In reality, scammers can now download malware onto your phone or computer.

                        These fake texts vary. “Sorry we missed you” is a common one, complete with a note urging you to click a link to update your delivery preferences. If you receive a text from an unknown source with a link, never click it — it’s probably a scam. If you’re concerned, check the website you ordered from directly to find out the status of your package.

                    </p>


                </main>
            </Wrapper>
        </>
    )
}

export default Page