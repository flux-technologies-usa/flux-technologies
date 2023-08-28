import AboutAndContact from "./About&Contact/AboutAndContact";
import AboutFlux from "./AboutFlux/AboutFlux";
import Accessoiries from "./Accessoiries/Accessoiries";
import CarCarousel from "./CarCarousel/CarCarousel";
import "./Home.scss";
import OurStories from "./OurStories/OurStories";
import VideoBannerSection from "./VideoBannerSection/VideoBannerSection";

const Home = () => {
  return (
    <div className="bg-[#1b1b1b]">
      <VideoBannerSection></VideoBannerSection>
      <CarCarousel></CarCarousel>
      <AboutFlux></AboutFlux>
      <OurStories />
      <AboutAndContact />
      <Accessoiries></Accessoiries>
    </div>
  );
};

export default Home;
