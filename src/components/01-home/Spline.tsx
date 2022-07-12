import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Animation = () => {
    return (
        <div className="flex absolute w-full h-full overflow-hidden top-0 left-0">
            <motion.div
                className="w-full h-full hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Spline
                    scene="https://prod.spline.design/0H6OJdIYj7emupzV/scene.splinecode"
                    // className="md:(h-full w-full) h-auto w-screen -mb-60"
                />
            </motion.div>
            <motion.div
                className="w-screen h-full md:hidden block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Spline
                    scene="https://prod.spline.design/rbStmfxYKiJuNywQ/scene.splinecode"
                />
            </motion.div>
        </div>
    );
};

export default Animation;
