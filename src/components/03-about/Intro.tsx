import React from 'react';
import atWork from '../../assets/maxAtWork.webp';

type Props = {};

const Intro = (props: Props) => {
    return (
        <div className="contain md:(pt-16 pb-16) flex-col -mt-32 pt-16 pb-8">
            <h1 className="text-sm md:text-lg text-off ">- Hello World! -</h1>
            <h1 className="font-serif text-4xl md:(text-6xl) text-center bg-off py-2 px-4">
                I'm Max Flores
            </h1>
            <img
                src={atWork}
                alt="At work"
                className="lg:w-1/3 w-fullrounded-sm object-cover pt-8 opacity-70"
            />
            <p className="lg:w-1/3 w-full leading-loose text-justify pt-8">
                I am a web developer, and graphic artist. My journey in the tech
                world started in 2006, while studying in high school I attended
                a 3 year IT program, where I learned how to deal with computers
                and networks. But the best of all was writing my first lines of
                code in software such as Visual Basic and Front Page.
            </p>
        </div>
    );
};

export default Intro;
