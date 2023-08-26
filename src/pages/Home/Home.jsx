import AboutAndContact from './About&Contact/AboutAndContact';
import BgTitle from './Bg&Title/BgTitle';
import AboutFlux from './AboutFlux/AboutFlux';
import Accessoiries from './Accessoiries/Accessoiries';
import CarCarousel from './CarCarousel/CarCarousel';
import './Home.scss'
import OurStories from './OurStories/OurStories';
import VideoBannerSection from './VideoBannerSection/VideoBannerSection';

const Home = () => {
    return (
        <div className=''>
            <VideoBannerSection></VideoBannerSection>
            <CarCarousel></CarCarousel>
            <BgTitle/>
            <OurStories/>
            <AboutAndContact/>
            <AboutFlux></AboutFlux>
            <Accessoiries></Accessoiries>
        </div>
    );
};

export default Home;