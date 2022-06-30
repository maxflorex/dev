import { gql, useQuery } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { STACK } from '../../graphql/Queries';
import Slider from './Slider';
import { motion } from 'framer-motion';
import { item, variants } from '../../utils/animations/animate';

const SlidesTechLove = () => {
    const [show, setShow] = useState('');

    const { data } = useQuery(STACK);
    

    return (
        <>
            <div className="w-full rounded-md py-24 px-8 container mx-auto">
                <h1 className="text-2xl font-serif mx-8">
                    Technologies I love ❤️
                </h1>
                <Slider navigation={false} autoplay={true} interval={4000}>
                    {data &&
                        data?.techStacks?.data.map((data: any, i: any) => {
                            let imageUrl =
                                data.attributes.Image.data.attributes.url;

                            return (
                                <motion.div
                                    key={i}
                                    className="flex h-32 md:h-48 overflow-hidden rounded-md w-full slidew px-2"
                                    initial={{ opacity: 0, translateX: -50 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.3,
                                    }}
                                >
                                    <div
                                        className=" flex flex-col gap-2 rounded-md w-full items-center justify-center"
                                        onMouseEnter={() => setShow(i)}
                                        onMouseLeave={() => setShow('')}
                                    >
                                        <div className="relative w-full">
                                            <img
                                                src={`http://localhost:1337${imageUrl}`}
                                                alt="Logo Tech"
                                                className="w-16 h-16 object-contain mx-auto"
                                            />
                                            <AnimatePresence>
                                                {show === i && (
                                                    <motion.h1
                                                        initial={{
                                                            y: 24,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            y: 0,
                                                            opacity: 1,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                        className="absolute w-full flex items-center justify-center pt-2"
                                                    >
                                                        {data.attributes.Title}
                                                    </motion.h1>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </Slider>
            </div>
        </>
    );
};

export default SlidesTechLove;
