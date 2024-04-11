import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <section className='flex flex-col justify-center items-center pb-20 w-4/5 mx-auto'>
            <p className='text-center text-3xl font-semibold py-5'>Frequently Asked Questions</p>
            <div className='flex justify-between items-center gap-10'>

                <div className='bg-white w-[650px] py-5 px-8 shadow-xl border'>
                    <Accordion type="single" collapsible className="">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-xl  hover:no-underline '>What Is The Guarantee Of Your Service?</AccordionTrigger>
                            <AccordionContent className='text-xl '>
                                We provide all the best quality suggested services. Our service will not be a copy-paste 100% guarantee. At the end of our service, you are made the work sheet head
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='text-xl  hover:no-underline '>What Is Your Costumer Support Policy?</AccordionTrigger>
                            <AccordionContent className='text-xl '>
                                We solve all buyers' problems directly or through zoom live meetings. We have skilled team who provide 24 hours support for our customers.


                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className='text-xl  hover:no-underline '>Why Choose Our Service?</AccordionTrigger>
                            <AccordionContent className='text-xl '>
                                We provide all our services organically. You will get very good results if you accept any of our services. We guarantee 100% growth in your business.
                            </AccordionContent>
                        </AccordionItem>


                        <AccordionItem value="item-4">
                            <AccordionTrigger className='text-xl  hover:no-underline '>How To Buy A Product?</AccordionTrigger>
                            <AccordionContent className='text-xl '>
                                You can choose any of our services and confirm the order with payment. Our team is waiting for your order to be confirmed.
                            </AccordionContent>
                        </AccordionItem>





                        <AccordionItem value="item-5">
                            <AccordionTrigger className='text-xl  hover:no-underline '>Your Payment Process?</AccordionTrigger>
                            <AccordionContent className='text-xl '>
                                We mainly accept six types of payments. Such as Western Union, Bank, Wise, Cash app, PayPal, and Payoneer.

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>


                <div className='space-y-5'>
                    <p className='text-3xl'>Find Your Right Solution And Let Us Know If You Need Any Help.</p>
                    <p>Ultraservice has skilled team to solve any of your problems. Our only goal is to grow your business by solving all your problems.

                    </p>

                    <p>You can knock us at any time ……</p>
                </div>

            </div>




        </section>
    )
}

export default FAQ 