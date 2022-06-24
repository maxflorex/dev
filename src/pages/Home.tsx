import React, { FC } from 'react';
import Hero from '../components/01-home/Hero.js';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import Tri from '../components/Tri.js';

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
        <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-center bg-teal-200 py-24"
        >
            <div className="relative w-full">
                {/* <iframe
                    src="https://my.spline.design/untitled-19cc69d232148ffb0267117f26270bad/"
                    frameBorder="24"
                    width="100%"
                    className="h-screen"
                />
                <div className="absolute bottom-0 right-0 h-96 w-96 bg-black">
                    Hello
                </div> */}
            </div>
            <Tri />
            {/* <Hero /> */}
        </motion.div>
    );
};

export default Home;
