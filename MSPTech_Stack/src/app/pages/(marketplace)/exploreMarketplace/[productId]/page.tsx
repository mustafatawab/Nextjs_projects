import React from 'react'
import { products } from '../product'
import Navbar from "@/components/Navbar/Navbar";

import Image from "next/image";
import cloudManagement from "@/assets/svgs/ExploreMarketplace/cloudmanagement.svg";
import mouse from "@/assets/svgs/mouse.svg";
import Wrapper from "@/components/Wrapper/wrapper";
import Link from "next/link";
import background from "@/assets/svgs/headerBackground.svg";
import Header from "@/components/Navbar/Header";
const ProductOverview = ({ params }: { params: { productId: number } }) => {
    const product = products.categories.filter((p) => p.id == params.productId) || products.featured.filter((p) => p.id == params.productId) || products.recent.filter((p) => p.id == params.productId) || products.topRated.filter((p) => p.id == params.productId)
    return (
        <>
            {/* <Navbar /> */}
            <Header />
            {/* HeroSection */}
            <section className="">
                <div className="w-full">
                    <Image
                        className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0 "
                        src={background}
                        alt=""
                    />
                </div>
                <div className="2xs:mt-2 sm:mt-2 md:mt-10 lg:mt-32 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto   xs:space-x-1 md:space-y-5 lg:space-y-10">
                    <p className="2xs:font-bold sm:font-bold  lg:font-[900] 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                        A Universe of
                        <br />
                        Possiblity
                    </p>

                    <p className="2xs:hidden sm:block md:block  lg:font-[600] lg:text-[24px] text-white">
                        Quote, Order, Bill and Provision cloud products in one
                        <br />
                        place- all with one monthly bill.
                    </p>
                </div>
                <div className="2xs:hidden sm:hidden md:flex lg:flex items-center justify-center md:mt-10 lg:mt-32 static   ">
                    <Image className="" src={mouse} alt="" />
                </div>
            </section>

            <Wrapper>
                {/* Main Section */}
                {product.map(p => <>
                    <section className="flex flex-wrap justify-between  2xs:flex-col md:flex-row sm:flex-col   lg:flex-row gap-4  ">
                        <div className="w-3/5 flex flex-col justify-start items-start gap-5 lg:mt-40">
                            <div className="flex justify-start items-center gap-3">
                                <Image src={p.image} alt={p.title} />
                                <h1 className="font-bold text-3xl">{p.title}</h1>
                            </div>

                            <div>
                                <p className="text-[#4B4F58]">
                                    {p.description}
                                </p>
                            </div>

                            <h2 className="font-bold text-3xl pt-5">Continuity</h2>
                            <div className="grid 2xs:grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-20">
                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Backup</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Backup</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Backup</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Backup</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>
                            </div>

                            <h2 className="font-bold text-3xl pt-5">Secuirity</h2>
                            <div className="grid 2xs:grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-20">
                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Email security</h4>
                                    <p>Cloud Management Cyber </p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Endpoint security</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">
                                        EDR (Endpoint Detection and Response)
                                    </h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Web security</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>

                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Security assessments</h4>
                                    <p>Cloud Management Cyber</p>
                                    <p>Protect Cloud</p>
                                </span>
                            </div>

                            <h2 className="font-bold text-3xl pt-5">Operations</h2>
                            <div className="grid 2xs:grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-20">
                                <span className="block w-full">
                                    <h4 className="font-semibold text-xl">Device Management</h4>
                                    <p>Cloud</p>
                                    <p>Protect Cloud</p>
                                </span>
                            </div>
                            <div className="flex flex-wrap  items-center 2xs:justify-center md:justify-start lg:justify-start gap-10">
                                <Link
                                    href="/pages/exploreMarketplace/productOverview/productResources"
                                    className="2xs:mx-auto sm:mx-auto md:mx-0 w-fit bg-transparent text-black border border-blue rounded-3xl 2xs:px-2 sm:px-2 md:px-4 lg:px-4 2xs:py-1 sm:py-1 md:py-2 lg:py-2 "
                                >
                                    See Resources
                                </Link>

                                <Link
                                    href={"/pages/venderMarketplace"}
                                    className="w-fit  bg-blue text-white rounded-3xl 2xs:px-2 sm:px-2 md:px-2 py-1 lg:px-6 lg:py-2 2xs:text-sm "
                                >
                                    Schedule a Demo
                                </Link>
                            </div>
                        </div>

                        <div className="2xs:w-full md:w-1/4 bg-[#EFEFF1] p-10 text-[#3A3A3A] mt-40">
                            <h3 className="font-semibold text-2xl ">
                                More Information and Resource
                            </h3>
                            <span> Partners </span>
                            <Link className="text-blue" href={"/pages/signin"}>
                                Sign in to MSP Tech Stack Marketplace
                            </Link>
                            <span>for full details and resources , </span>
                            <p>Not MSP Tech Stack Partner Yet ? </p>{" "}
                            <Link className="text-blue" href={"page/signup/step1"}>
                                Get Started
                            </Link>
                            <br />
                            <br />
                            <h3 className="font-semibold text-2xl">Fint Vendors by Category</h3>
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Communicaitons
                            </Link>
                            <br />
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Continuity
                            </Link>
                            <br />
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Infrastructure
                            </Link>
                            <br />
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Integrations
                            </Link>
                            <br />
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Network
                            </Link>
                            <br />
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Operations
                            </Link>
                            <br />
                            <Link className="text-blue" href={"/pages/venderMarketplace"}>
                                Productivity
                            </Link>
                        </div>
                    </section>

                </>)}


            </Wrapper>
        </>
    )
}

export default ProductOverview  