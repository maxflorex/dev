import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Animation = () => {
    return (
        <div className="flex absolute w-full h-full">
            <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Spline
                    // scene="https://prod.spline.design/rbStmfxYKiJuNywQ/scene.splinecode"
                    // scene="https://prod.spline.design/rbStmfxYKiJuNywQ/scene.splinecode"
                    scene="https://prod.spline.design/rbStmfxYKiJuNywQ/scene.splinecode"
                    // className="md:(h-full w-full) h-auto w-screen -mb-60"
                />
            </motion.div>
        </div>
    );
};

export default Animation;
