import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from './context/AppContext';
import { item, variants } from './animations/animate';

const Hero = () => {
    const { photos } = useContext(AppContext);

    return (
        <div>
            {/* TEST 1 */}
            <div className="grid-4">
                {photos?.length > 0 &&
                    photos
                        .slice(0, 20)
                        .map(({ albumId, id, title, url }: any) => (
                            <motion.div
                                key={id}
                                className="flex flex-col p-2 bg-white"
                                initial={{ opacity: 0, translateX: -50 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 0.5, delay: id * 0.2 }}
                            >
                                <img
                                    src={url}
                                    alt="P1"
                                    className="w-full h-24"
                                />
                                <h1 className="text-xs italic">title</h1>
                            </motion.div>
                        ))}
            </div>
            {/* TEST 2 */}
            {photos?.length > 0 && (
                <motion.ul
                    className="grid-4"
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >
                    {photos.slice(0, 20).map(({ id, url }: any) => (
                        <motion.li
                            key={id}
                            className="flex flex-col p-2 bg-white"
                            variants={item}
                        >
                            <img src={url} alt="P1" className="w-full h-24" />
                            <h1 className="text-xs italic">title</h1>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default Hero;
