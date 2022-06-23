import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Resume = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            Resume
        </motion.div>
    );
};

export default Resume;
