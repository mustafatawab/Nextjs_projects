
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import CarouselDemo from "@/views/home/carousel";
import Categories from "@/views/home/categories";
import DownloadApp from "@/views/home/downloadApp";
import FAQ from "@/views/home/faq";
import HeroSection from "@/views/home/hero";
import Reviews from "@/views/home/reviews";
import StayUptoDate from "@/views/home/stayUptoDate";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="bg-[#FCFBF3]">

        <Categories />
        <div className="bg-[#F1F1E8] py-5 flex justify-center items-center gap-5 w-full overflow-hidden">
          <span>Are you a business?</span>
          <Button className='bg-blue-700 rounded-full hover:bg-[#A6C0F0] hover:text-black font-semibold'>Get Started</Button>
        </div>
        {/* <StayUptoDate /> */}
        <Reviews />

        <DownloadApp />
        <CarouselDemo />
        <FAQ />
      </main>
    </>
  );
}
