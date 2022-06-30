import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/04-projects/Hero';
import ProjectList from '../components/04-projects/ProjectList';

type Props = {};

const Projects = (props: Props) => {
    return (
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{
                x: { type: "spring", stiffness: 100 },
                default: { duration: 0.2 },
              }}
        >
            <Hero />
            <ProjectList />
        </motion.div>
    );
};

export default Projects;
