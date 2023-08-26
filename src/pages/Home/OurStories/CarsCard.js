import React from 'react';

const CarsCard = ({card}) => {
    return (
        <div className='flex flex-col items-start gap-4'>
            <img src={card.img} alt="" className='w-full'/>
            <span className='text-xl text-white'>{card.title}</span>
            <span className='text-white text-sm'>{card.release_date}</span>
        </div>
    );
};

export default CarsCard;