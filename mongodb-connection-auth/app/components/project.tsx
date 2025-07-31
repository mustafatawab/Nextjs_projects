import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiSend } from 'react-icons/fi'

const Project = ({ image, title, description, sourceCode, live }: any) => {
    return (
        <div className='text-white rounded-xl p-5 border border-gray-700 bg-black/20 space-y-2 flex flex-col justify-between '>
            <Image className='rounded-xl' src={image} alt={title} />
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-sm'>{description}</p>
            <div className='flex justify-between items-center'>
                <Link className='p-2 flex items-center gap-2 font-semibold hover:scale-110 duration-500' href={sourceCode} target='_blank'>Source Code <FiSend className='text-white'/> </Link>
                <Link href={live} className='p-2 bg-gradient-to-b from-black via-purple-900/20 to-purple-900/70 rounded-lg font-semibold hover:scale-110 duration-500' target='_blank'>Live Project</Link>
            </div>
        </div>
    )
}

export default Project