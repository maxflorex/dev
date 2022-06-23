import React, { FC } from 'react';
import Hero from '../components/home/Hero.jsx';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';

const PROJECTS = gql`
    query projects {
        projects {
            data {
                attributes {
                    Title
                }
            }
        }
    }
`;

const Home: FC = () => {
    const { data } = useQuery(PROJECTS);

    console.log(data.projects.data);

    return (
        <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-center bg-teal-200 py-24"
        >
            {/* <Hero /> */}
        </motion.div>
    );
};

export default Home;
