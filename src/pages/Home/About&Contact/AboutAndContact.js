import React from 'react';
import './AboutAndContact.css'
const AboutAndContact = () => {
    return (
        <div className='flex items-center justify-center p-16 gap-8'>
            <div className='w-1/2 relative overflow-hidden'>
                <img src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000" alt="" className='w-full image'/>
                <div className='absolute bottom-10 left-10 z-10 flex flex-col'>
                    <span className='text-white'>Flux</span>
                    <span className='text-white text-xl border-b'>About Us</span>
                </div>
            </div>
            <div className='w-1/2 relative overflow-hidden'>
                <img src="https://img.freepik.com/premium-photo/race-car_928869-5574.jpg" alt="" className='w-full image'/>
                <div className='absolute bottom-10 left-10 z-10 flex flex-col'>
                    <span className='text-white'>Flux</span>
                    <span className='text-white text-xl border-b'>About Us</span>
                </div>
            </div>
        </div>
    );
};

export default AboutAndContact;