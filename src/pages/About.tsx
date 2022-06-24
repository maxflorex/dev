import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-full'
        >
            <iframe
                src="https://my.spline.design/untitled-526d498b3a51d74f0bd492a2f47db0a7/"
                frameBorder="24"
                width="100%"
                className="h-96 w-80"
            />
        </motion.div>
    );
};

export default About;
