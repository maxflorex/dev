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
                <div className="container mx-auto grid-2 p-4">
                    <div className="flex lg:items-start items-center justify-center flex-col h-60vh font-serif">
                        <p className="text-4xl text-azul text-left">
                            Hi, I'm Max
                        </p>
                        <div className="lg:(text-8xl text-left) text-7xl text-center leading-tight pb-8 pt-4">
                            <h1 className="text-off font-sans font-bold">
                                Frontend Developer
                            </h1>
                            <h1 className="text-rosa">& Designer</h1>
                        </div>
                    </div>
                    {/* <Animation /> */}
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
