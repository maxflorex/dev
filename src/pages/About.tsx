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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
