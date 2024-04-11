import React from 'react'
import preview1 from '@/assets/images/preview-1.webp'
import preview2 from '@/assets/images/preview-2.webp'
import preview3 from '@/assets/images/preview-3.webp'
import Image from 'next/image'
import profile from '@/assets/images/profile.jpeg'
import QRCode from '@/assets/images/qrcod.svg'

const DownloadApp = () => {
    return (

        <section className='bg-[#FCFBF3] py-10 sm:hidden md:flex'>

            <div className='text-center bg-white md:w-2/3 border mx-auto p-10 space-y-5 relative'>
                <h2 className='font-bold text-2xl text-center'>Shop smarter with the Trustpilot app
                </h2>
                <p>Keep Trustpilot in your pocket. Find companies, read reviews, or write them—all while on the go.

                </p>

                <div className='flex justify-center'>
                    <Image src={preview1} alt='' width={200} height={200} />
                    <Image src={preview2} alt='' width={200} height={200} />
                    <Image src={preview3} alt='' width={200} height={200} />
                </div>

                <div className='flex justify-between w-full bg-[#FCFBF3] absolute bottom-0 left-0 p-10'>
                    <span className='flex justify-start items-start'>

                        <Image src={profile} width={50} height={50} className='rounded-full' alt='' />
                        <span className='text-start gap-2'>

                            <p className='font-semibold text-xl'>Get The IOS App</p>
                            <p>Join the community! Scan the QR code with your phone camera to download
                            </p>
                        </span>
                    </span>

                    <Image src={QRCode} alt='' />

                </div>
            </div>
        </section>
    )
}

export default DownloadApp