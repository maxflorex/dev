import { gql, useQuery } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { STACK } from '../../graphql/Queries';
import Slider from './Slider';
import { motion } from 'framer-motion';

const SlidesTechLove = () => {
    const [show, setShow] = useState(0);

    const { data } = useQuery(STACK);

    return (
        <>
            <div className="w-full rounded-md py-24 px-8 container mx-auto">
                <Slider autoplay={false}>
                    {data &&
                        data?.techStacks?.data.map((data: any, i: number) => {
                            let imageUrl =
                                data.attributes.Image.data.attributes.url;

                            return (
                                <div className="flex h-32 md:h-48 overflow-hidden rounded-md w-full slidew px-2">
                                    <div
                                        className="bg-off/50 flex flex-col gap-2 rounded-md w-full items-center justify-center"
                                        onMouseEnter={() => setShow(i)}
                                        onMouseLeave={() => setShow(0)}
                                    >
                                        <img
                                            src={`http://localhost:1337${imageUrl}`}
                                            alt="Logo Tech"
                                            className="w-16 h-16 object-contain"
                                        />
                                        {show === i && (
                                            <AnimatePresence>
                                                <motion.h1
                                                    initial={{ y: 120 }}
                                                    animate={{ y: 0 }}
                                                >
                                                    {data.attributes.Title}
                                                </motion.h1>
                                            </AnimatePresence>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </>
    );
};

export default SlidesTechLove;
