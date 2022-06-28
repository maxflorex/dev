import React from 'react';

type Props = {};

const HireMe = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center mt-64 md:mt-0 mb-56 gap-8 md:gap-4 container mx-auto px-4 '>
            <h1 className='font-serif text-3xl md:text-4xl text-center'>I occasionally take on freelance opportunities</h1>
            <p className='text-sm text-justify hidden md:block'>
                Have an exciting project where you need help? Send me over a
                message, and let’s chat
            </p>
            <button className='btn block md:hidden'>Contact me</button>
        </div>
    );
};

export default HireMe;
