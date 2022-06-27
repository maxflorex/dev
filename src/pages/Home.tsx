import React, { FC } from 'react';
import Animation from '../components/01-home/Spline.js';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import logoName from '../assets/LOGOTYPE-08.svg';
import SlidesTechLove from '../components/carousel/SlidesTechLove.js';
import Projects from '../components/01-home/Projects';

const Home: FC = () => {
    return (
        <>
            <div className="bg-navy py-24 h-full">
                <div className="container mx-auto grid-2 p-4">
                    <div className="flex xl:items-start items-center justify-center flex-col h-60vh font-serif">
                        <p className="text-4xl text-azul text-left">
                            Hi, I'm Max
                        </p>
                        <div className="xl:(text-8xl text-left) text-7xl text-center leading-tight pb-8 pt-4">
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
        </>
    );
};

export default Home;
