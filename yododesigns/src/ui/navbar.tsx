import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/LOGO.svg'
const Navbar = () => {
  return (
    <div>
     <Image src={logo}  alt=''/>
    </div>
  )
}

export default Navbar