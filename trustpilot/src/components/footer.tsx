import React from 'react'
import logo from '@/assets/images/logo-white.svg'
import en from '@/assets/images/en.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function Footer() {
    return (

        <footer className='text-start flex flex-col justify-start items-start bg-black py-10 px-20 text-white space-y-6'>
            <Image src={logo} alt='' width={130} height={100} />
            <section className='flex w-full justify-between'>
                <div className='space-y-2'>
                    <p className='text-[#9FA0A0] font-semibold'>About</p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>About Us</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Jobs</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Contact</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Blog</Link>
                    </p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>How Trustpilot works</Link>
                    </p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Press</Link>
                    </p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Investor Relations</Link>
                    </p>
                    <Image src={en} alt='' width={100} height={100} />

                </div>


                <div className='space-y-2'>
                    <p className='text-[#9FA0A0] font-semibold'>Community</p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Trust in reviews</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Help Center</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Login</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Sign Up</Link>
                    </p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Chrome App</Link>
                    </p>
                </div>


                <div className='space-y-2'>
                    <p className='text-[#9FA0A0] font-semibold'>Businesses</p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Trustpilot Business</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Products</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Plans and pricing</Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Business Login</Link>
                    </p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}>Blog for Business</Link>
                    </p>
                </div>


                <div className='space-y-2'>
                    <p className='text-[#9FA0A0] font-semibold'>Follow us on</p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}> <FaFacebook className='text-xl' /> </Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}> <FaTwitter className='text-xl' /></Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}> <FaInstagram className='text-xl' /></Link>
                    </p>


                    <p>
                        <Link className='hover:border-b-2' href={'#'}> <FaLinkedin className='text-xl' /></Link>
                    </p>

                    <p>
                        <Link className='hover:border-b-2' href={'#'}> <FaYoutube className='text-xl' /> </Link>
                    </p>
                </div>

                <div>
                    <p className='text-[#9FA0A0] font-semibold pb-3'>Choose Country</p>
                    <Select>
                        <SelectTrigger className="w-[180px] text-black">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="unitedstates">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="denmark">Denmark</SelectItem>
                            <SelectItem value="denmark">Denmark</SelectItem>
                            <SelectItem value="denmark">Denmark</SelectItem>
                            <SelectItem value="denmark">Denmark</SelectItem>
                        </SelectContent>
                    </Select>


                </div>



            </section>


            <div className='flex w-full justify-between'>

                <Link className='hover:border-b-2' href={'#'}>Legal</Link>
                <Link className='hover:border-b-2' href={'#'}>Privacy Policy</Link>
                <Link className='hover:border-b-2' href={'#'}>Terms and Conditions</Link>
                <Link className='hover:border-b-2' href={'#'}>Guidelines for Reviewers</Link>
                <Link className='hover:border-b-2' href={'#'}>System Staus</Link>
                <Link className='hover:border-b-2' href={'#'}>Cookie Preferences</Link>
                <Link className='hover:border-b-2' href={'#'}>Modern Slavery Statement</Link>

                <span></span>
                <span></span>
            </div>



        </footer>
    )
}

export default Footer