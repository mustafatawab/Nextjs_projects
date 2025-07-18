import Heading from '@/components/Heading/heading'
import PrimaryButton from '@/components/button/PrimaryButton'
import React from 'react'

const Services = () => {
  return (
    <section className="my-10 space-y-5 w-full">
    <Heading text="Services" />
    <div className="flex flex-wrap">
      <div className="space-y-5 basis-1/2">
        <h1 className="text-lg font-bold text-[#4F4F4F] ">ACADEMY</h1>
        <p>
          Access an entire support team of MSP experts, coaches, and peers.
        </p>
        <PrimaryButton text="Get Learning" />
      </div>
      <div className="space-y-5 basis-1/2">
        <h1 className="text-lg font-bold text-[#4F4F4F]">PROSERVICE</h1>
        <p>
          Add bandwidth and expertise to your team with professional
          services.
        </p>
        <PrimaryButton text="Get Learning" />
      </div>
    </div>
  </section>
  )
}

export default Services