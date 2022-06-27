import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ArrowContainer from '../ArrowContainer';
import usePrev from '../../hooks/usePrev';
import useNext from '../../hooks/useNext';
import { variants } from '../../utils/animations/animate';

type Props = {
    children: JSX.Element;
    navigation?: boolean;
    autoplay?: boolean;
    speed?: number;
    interval?: number;
};

const Slider = ({
    children,
    navigation = true,
    autoplay = true,
    speed = 500,
    interval = 8000,
}: Props) => {
    const slideshow = useRef(undefined);
    const slideshowIntervals = useRef(undefined);
    const { previous } = usePrev(slideshow, speed);
    const { next } = useNext(slideshow, speed);

    useEffect(() => {
        // AUTOPLAY
        if (autoplay) {
            slideshowIntervals.current = setInterval(() => {
                next();
            }, interval);

            // // DELETE INTERVALS
            // slideshow.current.addEventListener('mouseenter', () => {
            //     clearInterval(slideshowIntervals.current);
            // });

            // // PUT BACK INTERVALS WHEN MOUSE LEAVE
            // slideshow.current.addEventListener('mouseleave', () => {
            //     slideshowIntervals.current = setInterval(() => {
            //         next();
            //     }, interval);
            // });
        }
    }, [autoplay, interval, next]);

    return (
        <div className="relative">
            <div className="relative w-full">
                <div className="relative overflow-hidden md:rounded-xl box">
                    <motion.div
                        ref={slideshow}
                        className="flex flex-nowrap w-full cursor-pointer"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
            {navigation && (
                <div className="z-20 w-full h-full flex my-auto box-border items-center">
                    <ArrowContainer direction="left" click={previous}>
                        <FiArrowLeft className="text-navy-500" />
                    </ArrowContainer>
                    <ArrowContainer direction="right" click={next}>
                        <FiArrowRight />
                    </ArrowContainer>
                </div>
            )}
        </div>
    );
};

export default Slider;
