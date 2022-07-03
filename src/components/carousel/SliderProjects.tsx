import Slider from './Slider';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from '../../utils/context/AppContext';

const SliderProjects = () => {
    const { projects } = useContext(AppContext);

    return (
        <div className="w-full rounded-md py-16 px-4 container mx-auto">
            <Slider navigation={true} autoplay={false} speed={300}>
                {projects?.length > 0 &&
                    projects.map((data: any, i: number) => {
                        const banner =
                            data.attributes.Banner.data[0].attributes.url;
                        const stack = data.attributes.tech_stacks.data;

                        console.log(data);
                        

                        return (
                            <motion.div
                                key={i}
                                className="slidesingle flex flex-col md:flex-row gap-4 items-center box-border"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.4,
                                }}
                            >
                                <Link
                                    to={`/projects/${data.id}`}
                                    className="border border-off/20 outline-8 my-0 rounded-sm overflow-hidden w-full relative"
                                >
                                    <img
                                        src={banner}
                                        alt="Logo Tech"
                                        className="object-contain w-full shadow opacity-50 hover:opacity-80 rounded-sm"
                                        // style={{filter: 'grayscale(100%)'}}
                                    />
                                    <Link
                                        to={`/projects/${data.id}`}
                                        className="btn2 absolute md:(top-4 left-4 bottom-auto right-auto) bottom-4 right-4"
                                    >
                                        View Full Project
                                    </Link>
                                </Link>
                                <motion.section className="flex flex-col gap-4 py-4 w-full">
                                    <div className="flex justify-between items-center mb-4 mx-0 md:mb-0">
                                        <Link
                                            to={`/projects/${data.id}`}
                                            className="text-4xl font-serif text-center md:(text-left pl-8)"
                                        >
                                            {data.attributes.Title}
                                        </Link>
                                        <div className="flex gap-8 md:pr-8 text-rosa">
                                            <a href={data.attributes.Github}>
                                                <BsGithub />
                                            </a>
                                            <a href={data.attributes.Website}>
                                                <BsGlobe />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-justify bg-navy px-8 py-12 md:(-ml-40 py-16  mr-0 px-16) z-10 rounded-sm text-off">
                                        {data.attributes.Summary}
                                    </p>
                                    <div className="flex gap-4 justify-between flex-wrap-reverse mt-8 pl-8">
                                        <ul className="flex gap-4 flex-wrap">
                                            {stack.map(
                                                (data: any, i: number) => (
                                                    <li
                                                        key={i}
                                                        className="text-xs md:text-sm font-serif bg-off px-2 py-1 rounded-sm"
                                                    >
                                                        {data.attributes.Title}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </motion.section>
                            </motion.div>
                        );
                    })}
            </Slider>
        </div>
    );
};

export default SliderProjects;
