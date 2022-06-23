import React, { useContext, useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,
} from 'framer-motion';
import { AppContext } from './context/AppContext';
import { item, variants } from './animations/animate';
import TestModal from '../components/modals/TestModal';

const Hero = () => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([]);
    const { photos } = useContext(AppContext);
    const [wot, setWot] = useState([]);

    const handleClick = (data: any) => {
        setShow(true);
        setSelected(data);
    };

    return (
        <>
            <div>
                {/* TEST 1 */}
                {/* <div className="grid-4">
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
            </div> */}
                {/* TEST 2 */}
                {photos?.length > 0 && (
                    <motion.ul
                        className="grid-4"
                        variants={variants}
                        initial="hidden"
                        animate="show"
                    >
                        {photos.slice(0, 20).map((data: any) => (
                            <div key={data.id}>
                                <motion.li
                                    className="flex flex-col p-2 bg-white"
                                    variants={item}
                                    onClick={() => handleClick(true)}
                                >
                                    <img
                                        src={data.url}
                                        alt="P1"
                                        className="w-full h-24 object-cover"
                                        onClick={() => setWot(data.url)}
                                    />
                                    <h1 className="text-xs italic">
                                        {data.title}
                                    </h1>
                                    <small>{data.url}</small>
                                </motion.li>
                                <AnimatePresence>
                                    {show && (
                                        <TestModal
                                            url={wot}
                                            setShow={setShow}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.ul>
                )}
            </div>
        </>
    );
};

export default Hero;
