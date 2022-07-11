import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Animation = () => {
    return (
        <div className="md:(w-1/2 block) h-full flex hidden">
            <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Spline
                    scene="https://prod.spline.design/OF5o0oiDijGXsDow/scene.splinecode"
                    className="md:(h-full w-full) h-auto w-screen -mb-60"
                />
            </motion.div>
        </div>
    );
};

export default Animation;
