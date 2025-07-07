import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <section className="space-y-10 py-20 ">
        <h3 className="text-center text-3xl font-bold">
          What are the different types of Car Finance?
        </h3>
        <p className="text-center text-[#5B5B5B] text-sm">
          We appreciate there are many different types of Car Finance products
          for you to choose from, and knowing which one meets your needs best is
          the key to happy financing. See a few of the different types below.
        </p>
        <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
          <div className="group hover:bg-[#419EB7] shadow-xl space-y-3 p-10 rounded hover:text-white">
            <h3 className="text-xl text-black font-bold group-hover:text-white">
              Hire Purchase
            </h3>
            <p>
              The loan is secured against the car, and you do not own it until
              you`ve reached the end of your agreement and paid the Purchase
              fee.
            </p>
            <p>
              A deposit may be needed but there would typically be no annual
              mileage restrictions.
            </p>
            <button className="inline-block px-4 py-2 text-white bg-[#032933] rounded hover:bg-white hover:text-black hover:border hover:border-[#032]">
              Learn More
            </button>
          </div>

          <div className="shadow-xl space-y-3 p-10 rounded hover:bg-[#419EB7] text-white group bg-[#032933]">
            <h3 className="text-xl  font-bold">Hire Purchase</h3>
            <p>
              The loan is secured against the car, and you do not own it until
              you`ve reached the end of your agreement and paid the Purchase
              fee.
            </p>
            <p>
              A deposit may be needed but there would typically be no annual
              mileage restrictions.
            </p>
            <button className="inline-block px-4 py-2  rounded bg-white text-black hover:border hover:border-[#032]">
              Learn More
            </button>
          </div>

          <div className="shadow-xl space-y-3 p-10 rounded hover:bg-[#419EB7] hover:text-white group">
            <h3 className="text-xl text-black font-bold group-hover:text-white">
              Hire Purchase
            </h3>
            <p>
              The loan is secured against the car, and you do not own it until
              you`ve reached the end of your agreement and paid the Purchase
              fee.
            </p>
            <p>
              A deposit may be needed but there would typically be no annual
              mileage restrictions.
            </p>
            <button className="inline-block px-4 py-2 text-white bg-[#032933] rounded hover:bg-white hover:text-black hover:border hover:border-[#032]">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="flex justify-center gap-20 py-20">
        <div className="basis-1/2 bg-white shadow-xl p-10  flex flex-col justify-around">
          <h2 className="text-2xl font-bold text-center">
            Frequently Ask QUestion
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline text-lg text-black">
                Can I swap my current financed car for a newer car ?
              </AccordionTrigger>
              <AccordionContent className="text-xm text-[#5B5B5B]">
                Yes, it`s possible to swap your current financed car for a newer
                one, but it depends on various factors such as the remaining
                balance on your current loan, the value of your current car, and
                the terms of the new financing agreement. You may need to
                negotiate with your current lender or explore options with a new
                lender to facilitate the swap.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline text-lg text-black">
                DO I have to buy a car from one your dealership?
              </AccordionTrigger>
              <AccordionContent className="text-xm text-[#5B5B5B]">
                While some car finance providers may require you to purchase a
                car from their affiliated dealerships, many offer financing that
                allows you to buy a car from any reputable dealer. It`s
                essential to clarify this with your chosen finance provider
                before proceeding with the application.{" "}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline text-lg text-black">
                Does it getting a core effect by my credit score?
              </AccordionTrigger>
              <AccordionContent className="text-xm text-[#5B5B5B]">
                In most cases, getting a quote for car finance will result in a
                soft inquiry on your credit report, which does not affect your
                credit score. However, if you proceed with a full application
                and a lender conducts a hard inquiry, it may have a minor impact
                on your credit score.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:no-underline text-lg text-black">
                What are the key differences between HP, PCP, & Persoanl Car
                Loan?
              </AccordionTrigger>
              <AccordionContent className="text-xm text-[#5B5B5B]">
                Hire Purchase (HP) and Personal Contract Purchase (PCP) are both
                types of car finance agreements, whereas a Personal Car Loan is
                a traditional loan used to purchase a vehicle. The key
                differences lie in ownership, flexibility, and end-of-term
                options. With HP, you own the car outright after the final
                payment, while PCP offers lower monthly payments and the option
                to return the car or purchase it at the end of the agreement. A
                Personal Car Loan involves borrowing a lump sum to purchase a
                car outright, with fixed monthly payments until the loan is
                repaid.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-[#419EB7] p-20 text-white text-center flex flex-col justify-between gap-3 basis-1/2 t">
          <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
          <p className="font-semibold">Telephone</p>

          <p> 0203 701 7994</p>

          <p className="font-semibold">Email</p>

          <p>info@fasteasyfinance.co.uk</p>
          <p className="font-semibold">Business Hours</p>
          <p>Monday to Friday 09:00 - 19:30</p>
          <p>Saturday 10:00 - 19:00</p>

          <p>Sunday 10:00 - 17:00</p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
