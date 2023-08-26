import AboutFlux from './AboutFlux/AboutFlux';
import Accessoiries from './Accessoiries/Accessoiries';
import CarCarousel from './CarCarousel/CarCarousel';
import './Home.scss'
import VideoBannerSection from './VideoBannerSection/VideoBannerSection';

const Home = () => {
    return (
        <div className=''>
            <VideoBannerSection></VideoBannerSection>
            <CarCarousel></CarCarousel>
            <AboutFlux></AboutFlux>
            <Accessoiries></Accessoiries>
        </div>
    );
};

export default Home;