import { motion } from 'framer-motion';
import { FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SliderProjects from '../carousel/SliderProjects';

type Props = {};

const Projects = (props: Props) => {
    return (
        <div className="container mx-auto md:pt-32">
            <div className="flex flex-wrap gap-4 justify-between mx-4 items-center">
                <h1 className="md:text-2xl text-lg italic text-xl text-left text-navy font-light font-serif">
                    &lt; Some Projects I’ve Built / &gt;
                </h1>
                <Link to="/projects" className="btn3">
                    Explore All Projects
                </Link>
            </div>
            <SliderProjects />
        </div>
    );
};

export default Projects;
