import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='text-white flex justify-between items-center mt-10 py-3'>
            <p>Copyright - Mustafa Tawab </p>
            <div className='flex justify-center items-center gap-3'>
                <Link className='p-2 rounded-lg border border-gray-200 text-white' href={"https://x.com/MustafaTawab1"}><FaTwitter /></Link>
                <Link className='p-2 rounded-lg border border-gray-200 text-white' href={"https://www.linkedin.com/in/mustafa-tawab/"}><FaLinkedin /></Link>
                <Link className='p-2 rounded-lg border border-gray-200 text-white' href={"https://github.com/mustafatawab"}><FaGithub /></Link>

            </div>
        </footer>
    )
}


export default Footer