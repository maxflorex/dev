import { motion } from 'framer-motion';
import { BsPlus } from 'react-icons/bs';
import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiSquarespace,
    SiStrapi,
    SiWebflow,
    SiWordpress,
} from 'react-icons/si';

type Props = {};

const BackendCms = (props: Props) => {
    return (
        <div className="mx-4 mt-32 mb-0 md:(mb-40 mt-40)">
            <div className="flex justify-center">
                <h1 className="md:bg-navy px-16 md:px-4 py-2 rounded-sm text-sm md:text-lg md:text-off lg:-mb-20 mb-8 z-20 md:font-semibold tracking-wide text-navy text-center hidden md:block mt-8">
                    Sometimes a frontend developer has to wear the fullstack
                    cape 🦸
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-12 md:gap-16 h-80">
                <div className="bg-off/50 hover:bg-off flex-center rounded-sm">
                    <p>What I use</p>
                    <h1 className="font-serif text-xl md:text-2xl">
                        When I take care of the backend
                    </h1>
                    <div className="flex gap-8 mt-4">
                        <SiNodedotjs className="text-4xl" />
                        <SiExpress className="text-4xl" />
                        <SiMongodb className="text-4xl" />
                        <SiMysql className="text-4xl" />
                        <BsPlus className="text-4xl" />
                    </div>
                </div>
                <div className="bg-off/50 hover:bg-off flex-center rounded-md">
                    <p>What I use</p>
                    <h1 className="font-serif text-xl md:text-2xl">
                        When a CMS is needed
                    </h1>
                    <div className="flex gap-8 mt-4">
                        <SiStrapi className="text-4xl" />
                        <SiWordpress className="text-4xl" />
                        <SiWebflow className="text-4xl" />
                        <SiSquarespace className="text-4xl" />
                        <BsPlus className="text-4xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackendCms;
