import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactModal from '../modals/ContactModal';
type Props = {};

const HireMe = (props: Props) => {
    const [showContact, setShowContact] = useState(false);

    const handleClick = (e: any) => {
        setShowContact(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };

    return (
        <div className="flex flex-col justify-center items-center my-48 md:(pt-0 my-56) gap-8 md:gap-4 container mx-auto px-4 pt-24">
            <motion.h1
                className="font-serif text-3xl md:text-4xl text-center"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                I occasionally take on freelance opportunities
            </motion.h1>
            <motion.p
                className="text-justify hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
            >
                Have an exciting project where you need help?{' '}
                <span onClick={handleClick} className="cursor-pointer hover:text-azul underline underline-offset-8 underline-off">
                    {' '}
                    Send me over a message, and let’s chat
                </span>
            </motion.p>
            <button className="btn block md:hidden">Contact me</button>
            {showContact && <ContactModal setShowContact={setShowContact} />}
        </div>
    );
};

export default HireMe;
