import React from 'react'
import logo from '../../assets/images/logo-header.svg'
import {IoLogoInstagram} from 'react-icons/io'
import {GrLinkedinOption} from 'react-icons/gr'
import {BiMessageDetail} from 'react-icons/bi'
import Image from 'next/image'
function Footer() {
  return (
    <div id='footerr' className='bg-[#25262A] flex justify-between items-center px-6 py-12'>
        <Image src={logo} alt='Logo Here'/>
        <p>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
        <IoLogoInstagram  className='text-[#ffaf29] text-3xl hover:bg-[#ffaf29] hover:text-black'/>
        <GrLinkedinOption className='text-[#ffaf29] text-3xl hover:bg-[#ffaf29] hover:text-black'/>
        <BiMessageDetail className='text-[#ffaf29] text-3xl hover:bg-[#ffaf29] hover:text-black' />

    </div>
  )
}

export default Footer