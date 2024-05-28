import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

import carousel1 from '@/assets/images/carousel1.webp'
import carousel2 from '@/assets/images/carousel2.webp'
import carousel3 from '@/assets/images/carousel3.webp'
import stars from '@/assets/images/stars-5.svg'

const carouselData = [
    {
        text: "The first birthday gift my wife didn't want to return.",
        description: "Robert experienced Songfinch",
        image: carousel1,
    },
    {
        text: "Gonna love making my flat a small jungle",
        description: "Marjori experienced Patch",
        image: carousel2,
    },


    {
        text: "Fixed my broke fone. But I still can't get a date on Tinder.",
        description: "Max experienced Re-Tech",
        image: carousel3,
    },
]

export default function CarouselDemo() {
    return (<>
        <section className="flex flex-col justify-start items-center w-full my-10 bg-[#FCFBF3] space-y-5 overflow-hidden">
            <p className="text-center font-bold text-gray-500 text-2xl">Your Stories</p>
            <h2 className="font-bold text-3xl text-center">Each review has a personal stories</h2>
            <Carousel className="w-2/3">
                <CarouselContent>
                    {carouselData.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                                <Card className="w-full p-0 border ">
                                    <CardContent className="flex items-center justify-between p-6">
                                        <div className="space-y-5">
                                            <Image src={stars} alt="" width={300} height={300} />

                                            <h3 className="text-3xl font-bold">{item.text}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="w-1/2 pl-4">
                                            <Image src={item.image} alt="" width={600} height={600} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>

        
    </>
    )
}
