import CarCarousel from './CarCarousel/CarCarousel';
import './Home.scss'
import VideoBannerSection from './VideoBannerSection/VideoBannerSection';

const Home = () => {
    return (
        <div className='mb-96'>
            <VideoBannerSection></VideoBannerSection>
            <CarCarousel></CarCarousel>
        </div>
    );
};

export default Home;