import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
    url: string;
    show: any;
};



const ExpandImageModal = ({ url, show }: Props) => {
    const handleShow = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            show(false);
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };
    return (
        <motion.div
            key="modal"
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
                x: '200vw',
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    duration: 0.3,
                },
            }}
            className="fixed bg-navy/98 dismiss flex-center top-0 left-0 overflow-hidden dismiss z-50 backdrop-blur-2xl"
            onClick={handleShow}
        >
            <AiOutlineClose
                className="fixed top-8 right-8 text-2xl dismiss cursor-pointer hover:animate-spin z-20 text-off"
                onClick={handleShow}
            />
            <img
                src={url}
                alt="Large"
                className="rounded-sm mx-20vw my-20vh object-contain m-auto max-w-90vw md:max-w-80vw xl:max-w-70vw max-h-90vh"
            />
        </motion.div>
    );
};

export default ExpandImageModal;
