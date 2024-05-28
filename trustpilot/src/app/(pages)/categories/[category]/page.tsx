'use client'
import React, { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { countries } from '@/utility/countries'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Wrapper from '@/components/wrapper'
import { animalPets, } from '@/utility/categories'
import { CategoryReviews } from '@/utility/reviews'
import Image from 'next/image'
import stars1 from '../../../../assets/images/stars-1.svg'
import stars2 from '../../../../assets/images/stars-2.svg'
import stars3 from '../../../../assets/images/stars-3.svg'
import stars4 from '../../../../assets/images/stars-4.svg'
import stars5 from '../../../../assets/images/stars-5.svg'

const subcategories = [
    'Agriculter & Produce',
    'Asian Grocery Stores',
    'Bakery & Pastry',
    'Beer & Wine',
    'Beverages & Liquor',
    'Candy & Chocolate',
    'Coffee & Tea',
    'Food Production',
    'Fruits & Vegetables',
    'Grocery Stores & Markets',
    'Lunch & Catering',
    'Meat, Seafood & Eggs',
    'Smoking & Tobacco'
]



const Page = ({ params }: { params: { category: string } }) => {
    const { category } = params


    const decodedUrl = decodeURIComponent(category.replace(/_/g, " "));

    const [faq, setFaq] = useState(false);



    return (

        <main>
            <div className='py-5 px-20 bg-white border-[1px]'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='p-20'>

                    <h1 className='text-3xl font-bold text-center'>Best in  {decodedUrl}</h1>
                    <p className='text-center text-gray-500'>Compare the best categories in this company</p>
                </div>
            </div>


            <section className='bg-[#fcfbf3] flex justify-center gap-5 py-10'>
                <section className='bg-white p-10 basis-1/4'>

                    <p className='font-semibold text-lg mb-2'>Rating</p>

                    <Tabs defaultValue="any" className="">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="any" className=''>Any</TabsTrigger>
                            <TabsTrigger value="3.0">3.0</TabsTrigger>
                            <TabsTrigger value="4.0">4.0</TabsTrigger>
                            <TabsTrigger value="4.5">4.5</TabsTrigger>
                        </TabsList>
                        {/* <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="Pedro Duarte" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="@peduarte" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you'll be logged out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Current password</Label>
                                        <Input id="current" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new">New password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent> */}
                    </Tabs>

                    <div className='my-5 w-full space-y-2'>
                        <Label className='text-lg font-semibold'>Location</Label>
                        <Select>
                            <SelectTrigger className=" text-black">
                                <SelectValue placeholder="Country" />
                            </SelectTrigger>
                            <SelectContent>
                                {countries.map((country, i) => <span key={i} className=' flex items-center gap-2'>
                                    {/* <ReactCountryFlag countryCode={country.code} svg /> */}
                                    <SelectItem value={country.name}>{country.name}</SelectItem>

                                </span>)}
                            </SelectContent>
                        </Select>
                        <Input type="text" placeholder="Zip" className='' />



                    </div>

                    <div>
                        <h1 className='text-lg font-semibold pb-4'>Company Status</h1>
                        <Separator />
                        <div className="flex items-center space-x-2 justify-between my-4">
                            <label
                                htmlFor="terms2"
                                className="text-md text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Verified
                            </label>
                            <Checkbox id="terms2" className='text-blue-500' />


                        </div>

                        <Separator />

                        <div className="flex items-center space-x-2 justify-between my-4">
                            <label
                                htmlFor="terms2"
                                className="text-md text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Claimed
                            </label>
                            <Checkbox id="terms2" className='text-blue-500' />



                        </div><Separator />

                        <span className='flex justify-between items-center'>

                            <h4 className='text-xl font-semibold'>Subcategories</h4>
                            <p>Show More</p>
                        </span>
                        <div className='flex flex-wrap gap-4 my-4'>
                            {subcategories.map((sub, i) =>
                                <div key={i}>

                                    <Button variant="outline" className='hover:bg-blue-300 '>{sub}</Button>
                                </div>
                            )}


                        </div>

                    </div>


                </section>
                <section className=' basis-1/2'>
                    <div className='flex justify-between items-center'>
                        <p>1-20 of 1,137 results</p>
                        <span className='flex gap-10 my-3'>
                            {/* <Label className='text-lg font-semibold'>Sort By</Label> */}
                            <Select>
                                <SelectTrigger className=" text-black">
                                    <SelectValue placeholder="Sort By" />
                                </SelectTrigger>
                                <SelectContent>

                                    <SelectItem value='relavant-reviews'>Most Relevant</SelectItem>
                                    <SelectItem value='high-reviews'>Highest Number of Reviews</SelectItem>
                                    <SelectItem value='recent-reviews'>Most Recent Reviews</SelectItem>


                                </SelectContent>
                            </Select>

                        </span>
                    </div>

                    <div>
                        <Accordion type="single" collapsible className="w-full bg-[#C2D5F7] px-4">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='hover:no-underline' onClick={() => setFaq(!faq)}>What does sorting by relavant mean? {faq ? "Read Less" : "Read More"} </AccordionTrigger>
                                <AccordionContent>
                                    Sorting by relevance shows all companies that are best in a category, ordered by TrustScore and review count. To be eligible, they must actively ask for reviews and have received 25+ in the last 12 months.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>


                    <div className='my-3 space-y-3'>
                        {CategoryReviews.map((review, i) => <div key={i} className='bg-white '>

                            <div className='flex gap-4 p-4'>

                                <Image src={review.img} alt={review.title} width={70} height={70} />
                                <span>
                                    <h4 className='font-semibold text-lg'>{review.title}</h4>
                                    {review.stars == 1 && <Image src={stars1} alt='' width={80} />}
                                    {review.stars == 2 && <Image src={stars2} alt='' width={80} />}
                                    {review.stars == 3 && <Image src={stars3} alt='' width={80} />}
                                    {review.stars == 4 && <Image src={stars4} alt='' width={80} />}
                                    {review.stars == 5 && <Image src={stars5} alt='' width={80} />}
                                    <p className='text-sm text-gray-600'>{review.location}</p>

                                </span>

                            </div>
                            <Separator />
                        </div>)}
                    </div>

                </section>
            </section>
        </main>

    )
}

export default Page