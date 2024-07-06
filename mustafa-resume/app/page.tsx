
import HeroSection from "./views/heroSection/HeroSection";
import SocailIcons from "./views/socialIcons/SocailIcons";
import About from "./views/about/about";
import Wrapper from "./components/wrap/wrapper";
import Services from "./views/portfolio/Portfolio";
import Contact from "./views/contact/Contact";
import Resume from "./views/resume/Resume";
import Footer from "./views/footer/Footer";


export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
      <Wrapper>
        <SocailIcons></SocailIcons>
        
        <About></About>
        <Services></Services>
        <Resume></Resume>

        <Contact></Contact>
        <Footer />
      </Wrapper>
    </>
  );
}
