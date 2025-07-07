import Wrapper from "@/components/wrapper";
import FAQ from "@/ui/LandingPage/faq";
import FinanceCalculator from "@/ui/LandingPage/financeCalculator";
import Hero from "@/ui/LandingPage/Hero";
import Section3 from "@/ui/LandingPage/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hero />
        <FinanceCalculator />
      </Wrapper>
      <Section3 />
      <Wrapper>
        <FAQ />
      </Wrapper>
    </>
  );
}
