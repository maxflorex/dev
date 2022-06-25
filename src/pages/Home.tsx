import React, { FC } from 'react';
import Animation from '../components/01-home/Spline.js';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import Tri from '../components/Tri.js';
import logoName from '../assets/LOGOTYPE-08.svg';
import Slides from '../components/carousel/Slides.js';

// const PROJECTS = gql`
//     query projects {
//         projects {
//             data {
//                 attributes {
//                     Title
//                 }
//             }
//         }
//     }
// `;

const Home: FC = () => {
    // const { data } = useQuery(PROJECTS);

    // console.log(data.projects.data);

    return (
        <>
            <motion.div
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                // transition={{ duration: 0.4 }}
                className="bg-navy py-24 h-full"
            >
                <div className="container mx-auto grid-2 p-4">
                    <div className="flex xl:items-start items-center justify-center flex-col h-60vh font-serif">
                        <p className="text-4xl text-off text-left">
                            Hi, I'm Max
                        </p>
                        <div className="xl:(text-8xl text-left) text-7xl text-center leading-tight pb-8 pt-4">
                            <h1 className="text-rosa">Frontend Developer</h1>
                            <h1 className="text-azul">& Designer</h1>
                        </div>
                        <img
                            src={logoName}
                            alt="Logo Name"
                            className="w-32 pt-6"
                        />
                    </div>
                    <Animation />
                </div>
            </motion.div>
            <Slides />
        </>
    );
};

export default Home;
