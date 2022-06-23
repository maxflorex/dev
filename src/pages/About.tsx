import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            About
        </motion.div>
    );
};

export default About;
