import Link from 'next/link';
import React from 'react'
import { FaCarAlt, FaSearch } from 'react-icons/fa'
import { MdHome, MdOndemandVideo, MdOutlinePets, MdSportsBaseball } from "react-icons/md";
import { IoIosMicrophone, IoIosRestaurant } from "react-icons/io";
import { animalPets, homeServices, mediaPublishing, moneyInsurance, publicLocalServices, shopping, travelVacations, utilites, vehicalTransportation } from '@/utility/categories';
import { beauty } from '@/utility/categories';
import { businessServices } from '@/utility/categories';
import { educationAndTraining } from '@/utility/categories';
import { electronics } from '@/utility/categories';
import { medicalHealth } from '@/utility/categories';
import { hobbiesAndCraft } from '@/utility/categories';
import { GiClothes, GiPayMoney, GiPlug } from 'react-icons/gi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { BsBank } from "react-icons/bs";




const Category = () => {
    return (
        <>
            <section className='p-5 lg:p-20 bg-[#fcfcf4] w-full'>
                <h1 className='text-3xl font-bold mb-10 text-center md:text-start'>Explore Companies by Categories</h1>
                <div className='flex  flex-wrap lg:flex-nowrap justify-center items-start  lg:gap-x-10 lg:gap-y-5 gap-5'>
                    {/* 1st Col */}
                    <div className='flex flex-col  gap-4'>


                        <div className='border rounded-lg w-full '>
                            <Link href={`/categories/${animalPets.path}`}>
                                <div className='flex flex-col justify-center  items-center bg-[#FFFBD6] hover:bg-[#e9e4b8] py-10 px-16 '>
                                    <MdOutlinePets className='text-2xl' />
                                    <p className='font-bold'>{animalPets.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                <div>
                                    {animalPets.category.map((category, idx) => <>
                                        <li key={idx} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>


                                    </>)}
                                </div>


                            </ul>
                        </div>


                        <div className='border rounded-lg w-full '>
                            <Link href={`/categories/${beauty.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#9FF6D3]/80 hover:bg-[#9FF6D3] p-10 '>
                                    <MdOutlinePets className='text-2xl' />

                                    <p className='font-bold'>{beauty.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>

                                {
                                    beauty.category.map((category) => <>

                                        <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>

                                    </>)
                                }

                            </ul>
                        </div>


                        <div className='border rounded-lg w-full'>
                            <Link href={`/categories/${businessServices.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC5D5]/80 hover:bg-[#FFC5D5] p-10 '>
                                    <IoIosMicrophone className='text-2xl' />
                                    <p className='font-bold w-fit'>{businessServices.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                <div>
                                    {businessServices.category.map((category, idx) => <>

                                        <li key={idx} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>

                                    </>)}
                                </div>


                            </ul>
                        </div>

                        <div className='border rounded-lg w-full '>
                            <Link href={`/categories/construction_and_manufacturing`}>

                                <div className='flex flex-col justify-center items-center bg-[#9FF6D3]/80 hover:bg-[#9FF6D3] p-10 '>
                                    <MdOutlinePets className='text-2xl' />

                                    <p className='font-bold'>Construction and manufacturing</p>
                                </div>
                            </Link>
                            <ul className='py-5'>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/Architects_Engineers'}> Architects & Engineers</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/Building_Materials'}>Building Materials</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/Chemicals_Plastic'}> Chemicals & Plastic</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/Construction_Services'}>  Construction Services</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'categories/Contractors_Consultants'}>Contractors & Consultants</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/Garden_Landscaping'}>Garden & Landscaping</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/manufacturing'}> Manufacturing</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'/categories/Production_Services'}>Production Services</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={'/categories/Tools_Equipment'}>Tools & Equipment</Link> </li>
                            </ul>
                        </div>
                        <div className='border rounded-lg '>
                            <Link href={'/categories/business_services'}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC999]/80 hover:bg-[#FFC999] py-10 px-16 '>
                                    <MdOutlinePets className='text-2xl' />
                                    <p className='font-bold'>{educationAndTraining.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                <div>
                                    {educationAndTraining.category.map((category, idx) => <>

                                        <li key={idx} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>

                                    </>)}
                                </div>


                            </ul>
                        </div>



                        <div className='border rounded-lg '>
                            <Link href={`/categories/${electronics.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC999]/80 hover:bg-[#FFC999] py-10 px-16 '>
                                    <MdOutlinePets className='text-2xl' />
                                    <p className='font-bold'>{electronics.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                <div>
                                    {electronics.category.map((category, idx) => <>

                                        <li key={idx} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>

                                    </>)}
                                </div>


                            </ul>
                        </div>
                    </div>



                    {/* 2nd Col */}
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='border rounded-lg w-full'>
                            <Link href={`/categories/events_&_entertainments`}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC5D5]/80 hover:bg-[#FFC5D5] p-10 '>
                                    <IoIosMicrophone className='text-2xl' />
                                    <p className='font-bold w-fit'>Events & Entertainments</p>
                                </div>
                            </Link>

                            <ul className='py-5'>

                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}>Adult Entertainment</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}>Children`s Entertainment</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}>Clubbing & Nightlife</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}>Events & Venues</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}>Gambling</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}> Gaming</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}> Museums & Exhibits</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}>  Museums & Exhibits</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}> Music & Movies</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}> Theater & Opera</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={`/categories/Adult_Entertainment`}> Wedding & Party</Link> </li>
                            </ul>
                        </div>


                        <div className='border rounded-lg w-full'>
                            <div className='flex flex-col justify-center items-center bg-[#FFFBD6]/80 hover:bg-[#FFFBD6] p-10 '>
                                <MdOutlinePets className='text-2xl' />
                                <p className='font-bold'>Food, Baverages & Tobacco</p>
                            </div>

                            <ul className='py-5'>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Agriculture & Produce</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Asian Grocery Stores</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Bakery & Pastry</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Beer & Wine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Beverages & Liquor</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Candy & Chocolate</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Coffee & Tea</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Food Production</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Fruits & Vegetables</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Grocery Stores & Markets</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Lunch & Catering</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Meat, Seafood & Eggs</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={'#'}>Smoking & Tobacco</Link> </li>
                            </ul>
                        </div>



                        <div className='border rounded-lg w-full '>
                            <div className='flex flex-col justify-center items-center bg-[#9FF6D3]/80 hover:bg-[#9FF6D3] p-10 '>
                                <MdOutlinePets className='text-2xl' />

                                <p className='font-bold'>{medicalHealth.name}</p>
                            </div>

                            <ul className='py-5'>
                                {
                                    medicalHealth.category.map((category, index) => <>

                                        <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.name}`}> {category.name
                                        }</Link> </li>

                                    </>)
                                }
                            </ul>
                        </div>


                        <div className='border rounded-lg w-full'>
                            <Link href={'#'}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC5D5]/80 hover:bg-[#FFC5D5] p-10 '>
                                    <IoIosMicrophone className='text-2xl' />
                                    <p className='font-bold w-fit'>{hobbiesAndCraft.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                {hobbiesAndCraft.category.map((category: any, i) => <>

                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>{category.name}</Link> </li>

                                </>)}

                            </ul>
                        </div>

                    </div>

                    {/* 3rd Col */}


                    <div className='flex flex-col  gap-4'>
                        <div className='border rounded-lg w-full'>
                            <Link href={'#'}>

                                <div className='flex flex-col justify-center items-center bg-[#9FF6D3]/80 hover:bg-[#9FF6D3] py-10 px-16 '>

                                    <MdHome className='text-2xl' />
                                    <p className='font-bold'>Home & Garden</p>
                                </div>
                            </Link>

                            <ul className='py-5'>


                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Bathroom & Kitchen</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Cultural Goods</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Decoration & Interior</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Energy & Heating</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Fabric & Stationery</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Furniture Stores</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Garden & Pond</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Home & Garden Services</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Home Goods Stores</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={'#'}>Home Improvements</Link> </li>
                            </ul>
                        </div>


                        <div className='border rounded-lg '>
                            <Link href={`/categories/${homeServices.path}`}>

                                <div className='flex flex-col justify-center items-center bg-[#FFC999]/80 hover:bg-[#FFC999] py-10 px-16 '>
                                    <MdHome className='text-2xl' />
                                    <p className='font-bold'>{homeServices.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                {homeServices.category.map((category, i) => <>
                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>

                                </>)}
                            </ul>
                        </div>


                        <div className='border rounded-lg '>
                            <div className='flex flex-col justify-center items-center bg-[#FFC999]/80 hover:bg-[#FFC999] p-10 '>
                                <BsBank className='text-2xl' />
                                <p className='font-bold'>Legal Services & Governments</p>
                            </div>

                            <ul className='py-5'>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Customs & Toll</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Government Department</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Law Enforcement</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Lawyers & Attorneys</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Legal Service Providers</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Libraries & Archives</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Municipal Department</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={'#'}> Registration Services </Link> </li>
                            </ul>
                        </div>

                        <div className='border rounded-lg'>
                            <div className='flex flex-col justify-center items-center bg-[#FFC5D5]/80 hover:bg-[#FFC5D5] p-10 '>
                                <MdOndemandVideo className='text-2xl' />
                                <p className='font-bold'>{mediaPublishing.name}</p>
                            </div>

                            <ul className='py-5'>


                                {mediaPublishing.category.map((category: any, i: any) => <>

                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>
                                </>)}


                            </ul>
                        </div>
                        <div className='border rounded-lg w-full '>
                            <Link href={`/categories/${moneyInsurance.path}`}>
                                <div className='flex flex-col justify-center  items-center bg-[#FFFBD6] hover:bg-[#e9e4b8] py-10 px-16 '>
                                    <GiPayMoney className='text-2xl' />
                                    <p className='font-bold'>{moneyInsurance.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                <div>
                                    {moneyInsurance.categoy.map((category: any, idx: any) => <>
                                        <li key={idx} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>


                                    </>)}
                                </div>


                            </ul>
                        </div>



                        <div className='border rounded-lg w-full'>
                            <Link href={`/categories/${publicLocalServices.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#9FF6D3]/80 hover:bg-[#9FF6D3] py-10 px-16 '>
                                    <IoIosMicrophone className='text-2xl' />
                                    <p className='font-bold w-fit'>{publicLocalServices.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>
                                <div>
                                    {publicLocalServices.category.map((category: any, idx: any) => <>
                                        <li key={idx} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>


                                    </>)}
                                </div>
                            </ul>
                        </div>

                        <div className='border rounded-lg '>
                            <div className='flex flex-col justify-center items-center bg-[#FFC999]/80 hover:bg-[#FFC999] py-10 px-20 '>
                                <MdSportsBaseball className='text-2xl' />
                                <p className='font-bold'>Sports</p>
                            </div>

                            <ul className='py-5'>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Ball Games</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Bat-and-ball Games</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Bowls & Lawn Sports</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Dancing & Gymnastics</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Equipment & Associations</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Extreme Sports</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Fitness & Weight Lifting</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Golf & Ultimate</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Hockey & Ice Skating</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Martial arts & Wrestlingh</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Outdoor & Winter Sports</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Shooting & Target Sports</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Swimming & Water Sports</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={'#'}>Tennis & Racquet Sports</Link> </li>
                            </ul>
                        </div>

                    </div>
                    {/* 4th Col */}
                    <div className='flex flex-col gap-4'>


                        <div className='border rounded-lg '>
                            <div className='flex flex-col justify-center items-center bg-[#FFC5D5]/80 hover:bg-[#FFC5D5] p-10 '>
                                <IoIosRestaurant className='text-2xl' />
                                <p className='font-bold'>Restaurant & Bars</p>
                            </div>

                            <ul className='py-5'>



                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>African & Pacific Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Bars & Cafes</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Chinese & Korean Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>European Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>General Restaurants</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Japanese Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Mediterranean Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Middle Eastern Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>North & South American Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Southeast Asian Cuisine</Link> </li>
                                <li className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>Takeaway</Link> </li>
                                <li className=' mx-4 py-2'> <Link className='hover:underline' href={'#'}>Vegetarian & Diet</Link> </li>
                            </ul>
                        </div>


                        <div className='border rounded-lg '>
                            <Link href={`/categories/${shopping.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#9FF6D3]/80 hover:bg-[#9FF6D3] p-10 '>
                                    <GiClothes className='text-2xl' />
                                    <p className='font-bold'>{shopping.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>

                                {shopping.category.map((category: any, i: any) => <>

                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>{category.name}</Link> </li>

                                </>)}

                            </ul>
                        </div>



                        <div className='border rounded-lg '>
                            <Link href={`/categories/${travelVacations.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC999]/80 hover:bg-[#FFC999] p-10 '>
                                    <IoBagHandleOutline className='text-2xl' />
                                    <p className='font-bold'>{travelVacations.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>

                                {travelVacations.category.map((category: any, i: any) => <>

                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>{category.name}</Link> </li>

                                </>)}

                            </ul>
                        </div>


                        <div className='border rounded-lg '>
                            <Link href={`/categories/${utilites.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#FFC5D5]/80 hover:bg-[#FFC5D5] p-10 '>
                                    <GiPlug className='text-2xl' />
                                    <p className='font-bold'>{utilites.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>

                                {utilites.category.map((category: any, i: any) => <>

                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={'#'}>{category.name}</Link> </li>

                                </>)}

                            </ul>
                        </div>


                        <div className='border rounded-lg '>
                            <Link href={`/categories/${vehicalTransportation.path}`}>
                                <div className='flex flex-col justify-center items-center bg-[#FFFBD6] hover:bg-[#e9e4b8] p-10 '>
                                    <FaCarAlt className='text-2xl' />
                                    <p className='font-bold'>{vehicalTransportation.name}</p>
                                </div>
                            </Link>

                            <ul className='py-5'>

                                {vehicalTransportation.category.map((category: any, i: any) => <>

                                    <li key={i} className='border-b-[1px] mx-4 py-2'> <Link className='hover:underline' href={`/categories/${category.path}`}>{category.name}</Link> </li>

                                </>)}

                            </ul>
                        </div>




                    </div>




                </div>
            </section>
        </>
    )
}

export default Category