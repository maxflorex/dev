import React, { FC } from 'react';
import Animation from '../components/01-home/Spline.js';
import SlidesTechLove from '../components/carousel/SlidesTechLove.js';
import Projects from '../components/01-home/Projects';
import BackendCms from '../components/01-home/BackendCms.js';
import HireMe from '../components/01-home/HireMe.js';
import AboutMe from '../components/01-home/AboutMe.js';

const Home: FC = () => {
    return (
        <>
            <div className="bg-navy py-24 h-full">
                <div className="container mx-auto flex flex-wrap-reverse items-center px-4 py-6 h-60vh">
                    <div className="flex lg:items-start items-start justify-center flex-col font-serif md:w-1/2">
                        <p className="md:text-4xl text-2xl text-azul text-left">
                            Hi, I'm Max
                        </p>
                        <div className="lg:(text-8xl text-left) text-5xl text-left leading-tight pb-8 pt-4">
                            <h1 className="text-off font-sans font-bold">
                                Frontend Developer
                            </h1>
                            <h1 className="text-rosa">& Designer</h1>
                        </div>
                    </div>
                    <Animation />
                </div>
            </div>
            <SlidesTechLove />
            <Projects />
            <BackendCms />
            <HireMe />
            <AboutMe />
        </>
    );
};

export default Home;
