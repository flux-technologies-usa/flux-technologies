import React from 'react';
import './Success.scss'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Success = () => {
    return (
        <div className='h-screen w-screen wrapper pt-44'>
            <div className='flex flex-col items-center justify-center w-[80%] h-[80%] mx-auto rounded gap-5 p-wrapper'>
                <BsFillCheckCircleFill size={45} color='#008000'/>
                <span className='text-2xl text-green-500'>Payment Successful!</span>
                <span>Thank your for your time. Your payment accept successfully</span>
                <Link to='/' className='text-blue-600 underline font-semibold'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Success;