"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const slides = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ulysse-pointcheval--j6LLsAehUo-unsplash.jpg-qGecFMtYocZudDVPt6zidvNRaEtGVv.jpeg",
      title: "Discover Luxury",
      description: "Explore our collection of premium fragrances crafted with the finest ingredients",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eve-maier-M3PWXjCiRbQ-unsplash.jpg-ysQfOFkrmGF1JSYLwZzUA32XPmWEtL.jpeg",
      title: "Find Your Signature",
      description: "Let us help you discover the perfect scent that tells your unique story",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="Luxury perfume collection"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 container mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl">{slide.title}</h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">{slide.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 text-base"
                >
                  <Link href="/categories">Explore Collections</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-4" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
