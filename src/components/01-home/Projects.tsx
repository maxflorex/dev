import { motion } from 'framer-motion';
import { FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SliderProjects from '../carousel/SliderProjects';

type Props = {};

const Projects = (props: Props) => {
    return (
        <div className="container mx-auto pt-32">
            <motion.div
                className="flex justify-between mx-4 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.2,
                    delay: 0.1,
                }}
            >
                <h1 className="lg:text-5xl text-4xl text-left text-navy font-serif">
                    Some Projects I’ve Built
                </h1>
                <Link
                    to="/projects"
                    className="bg-navy text-center leading-relaxed py-2 px-4 text-off py-auto hover:(bg-rosa) rounded-sm font-semibold"
                >
                    See More Projects
                </Link>
            </motion.div>
            <SliderProjects />
        </div>
    );
};

export default Projects;
FiYoutube;
