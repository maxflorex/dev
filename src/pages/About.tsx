import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/03-about/Header';
import Intro from '../components/03-about/Intro';
import Developer from '../components/03-about/Developer';
import Designer from '../components/03-about/Designer';
import Navigate from '../components/03-about/Navigate';
import Outro from '../components/03-about/Outro';

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{
                x: { type: 'spring', stiffness: 100 },
                default: { duration: 0.2 },
            }}
            className="w-full"
        >
            <Header />
            <Intro />
            <Developer />
            <Designer />
            <Outro />
            <Navigate />
        </motion.div>
    );
};

export default About;
