import AboutAndContact from './About&Contact/AboutAndContact';
import BgTitle from './Bg&Title/BgTitle';
import CarCarousel from './CarCarousel/CarCarousel';
import './Home.scss'
import OurStories from './OurStories/OurStories';
import VideoBannerSection from './VideoBannerSection/VideoBannerSection';

const Home = () => {
    return (
        <div className='mb-96'>
            <VideoBannerSection></VideoBannerSection>
            <CarCarousel></CarCarousel>
            <BgTitle/>
            <OurStories/>
            <AboutAndContact/>
        </div>
    );
};

export default Home;