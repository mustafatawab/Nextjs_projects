'use client'
import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import mouse from "@/assets/svgs/mouse.svg";
import Wrapper from "@/components/Wrapper/wrapper";
import Link from "next/link";
import { products } from "./product";
import { IoSearchSharp } from "react-icons/io5";
import { MdStarBorder } from "react-icons/md";
import background from "@/assets/svgs/headerBackground.svg";
import Header from "@/components/Navbar/Header";


function Page() {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState({
    categories: products.categories,
    featured: products.featured,
    recent: products.recent,
    topRated: products.topRated,
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const handleSearch = () => {
    const filterResults = (section: any) => section.filter((product: any) => product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setSearchResults({
      categories: filterResults(products.categories),
      featured: filterResults(products.featured),
      recent: filterResults(products.recent),
      topRated: filterResults(products.topRated),
    });
  };

  useEffect(() => {
    const filterResults = (section: any) => section.filter((product: any) => product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setSearchResults({
      categories: filterResults(products.categories),
      featured: filterResults(products.featured),
      recent: filterResults(products.recent),
      topRated: filterResults(products.topRated),
    });
  }, [searchTerm]);

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* Hero */}
      <section>
        <div className="w-full">
          <Image className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0 " src={background} alt="" />
        </div>
        <div className="2xs:mt-2 sm:mt-2 md:mt-10 lg:mt-32 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto   xs:space-x-1 md:space-y-5 lg:space-y-10">
          <p className="2xs:font-bold sm:font-bold  lg:font-[900] 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white ">
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
        {/* Search  */}
        <div className="flex items-center text-[#16151380] 2xs:mt-40 sm:mt-40 md:mt-48 lg:mt-32 xl:mt-80">
          <span className="flex items-center bg-white py-1 px-2 border border-[#16151380] rounded-md 2xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <IoSearchSharp />
            <input
              type="text"
              className="outline-none border-none px-2 text-black w-full"
              value={searchTerm}
              onChange={handleChange} />
          </span>

          <button type="button" onClick={handleSearch} className="bg-[#C4CED7]/20 text-black font-semibold   p-1 px-2 shadow-lg border-r-2 border-b-2 ">
            Go
          </button>


        </div>

        {/* Oracle Cloud Infrastructure App Categories */}

        <section className="my-10">
          <h2 className="font-semibold text-3xl py-10">
            Oracle Cloud Infrastructure App Categories
          </h2>

          <div className="flex flex-wrap xs:fle-col sm:flex-col md:flex-row 2xs:justify-center  gap-10 md:justify-between">
            {searchResults.categories.map((result) => <Link key={result.id} href={"/pages/exploreMarketplace/productOverview"}>
              <div className="bg-white shadow-xl rounded-md  py-10 space-y-5 sm:mx-auto md:mx-0 2xs:basis-full  xs:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <Image className="mx-auto" src={result.image} alt={result.title} />
                <hr className="" />
                <br />
                <span className="px-10 flex flex-col ">
                  <p className="font-bold">{result.title}</p>
                  <p className="text-[#16151399]">{result.apps} Applications</p>
                </span>
              </div>
            </Link>
            )}
          </div>
        </section>

        {/* Featured Apps */}
        <section>
          <h2 className="font-semibold text-3xl py-10">Featured Apps</h2>
          <div className="bg-white flex flex-wrap 2xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center w-fit">
            {searchResults.featured.map((result) => <>
              <div key={result.id} className="basis-1/5 p-10 md:border-r-0 lg:border-r-[1px]">
                <Link href={"/pages/exploreMarketplace/productOverview"}>
                  <Image className="mx-auto" src={result.image} alt={result.title} />
                  <p className="py-4">{result.title}</p>
                  <p className="py-4 text-sm">
                    {result.description}
                  </p>
                  <span className="flex items-center">
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <p>({0})</p>
                  </span>
                </Link>
              </div>

            </>)}
          </div>
        </section>

        {/* Recent Apps */}
        <section>
          <span className="mt-20 pb-10 block">
            <h2 className="font-semibold text-3xl ">Recent Apps</h2>
            <p>View 251 More</p>
          </span>


          <div className="bg-white flex 2xs:flex-wrap xl:flex-nowrap 2xs:flex-col sm:flex-col md:flex-row  justify-between items-center w-fit">
            {searchResults.recent.map(result => <>
              <div key={result.id} className="basis-1/4 p-10 md:border-r-0 lg:border-r-[1px]">
                <Link href={"/pages/exploreMarketplace/productOverview"}>
                  <Image className="mx-auto" src={result.image} alt={result.title} />
                  <p className="py-4">{result.title}</p>
                  <p className="py-4 text-sm">{result.description}</p>
                  <span className="flex items-center">
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <p>({0})</p>
                  </span>
                </Link>
              </div>

            </>)}
          </div>

        </section>

        {/* Top Rated Apss */}
        <section>
          <span className="mt-20 pb-10 block">
            <h2 className="font-semibold text-3xl ">Top Rated Apps</h2>
            <p>View 251 More</p>
          </span>
          <div className="bg-white flex flex-wrap 2xs:flex-col md:flex-col lg:flex-row justify-between items-center w-fit">
            {searchResults.topRated.map((result) => <>
              <div className="basis-1/5  p-10 md:border-r-0 lg:border-r-[1px]">
                <Link href={"/pages/exploreMarketplace/productOverview"}>
                  <Image className="mx-auto" src={result.image} alt={result.title} />
                  <p className="py-4">{result.title}</p>
                  <p className="py-4 text-sm">
                    {result.description}
                  </p>
                  <span className="flex items-center">
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <p>({0})</p>
                  </span>
                </Link>
              </div>
            </>)}
          </div>
        </section>

        {/* Some Text */}
        <div className="my-20 space-y-5">
          <h2 className="text-[#1A1816] text-2xl font-bold">
            Learn Who are Our Partners
          </h2>
          <p>
            Oracle proudly supports a wide range of third-party solutions to
            accelerate and optimize your cloud and hybrid deployments. With new
            offerings continually added, our comprehensive network of partners
            ensures your cloud architecture on Oracle Cloud Infrastructure (OCI)
            can scale and evolve with your organizations needs.
          </p>
          <button className="text-white p-3 bg-[#312D2A] w-fit rounded-md 2xs:mx-auto md:mx-0">
            Our Partners
          </button>
        </div>
      </Wrapper>
    </>
  );
}

export default Page;
