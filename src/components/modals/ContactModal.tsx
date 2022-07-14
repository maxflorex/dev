import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import mail3d from '../../assets/email-notification-4036270-3342587.png';

type Props = {
    setShowContact: any;
};

const ContactModal = ({ setShowContact }: Props) => {
    const handleClick = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            setShowContact(false);
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    return (
        <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
                x: 200,
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    duration: 0.3,
                },
            }}
            className="fixed bg-white/40 blurry dismiss flex-center top-0 left-0 overflow-hidden dismiss z-50 backdrop-blur-2xl"
            onClick={handleClick}
        >
            <AiOutlineClose
                className="fixed top-8 right-8 text-2xl dismiss cursor-pointer hover:animate-spin"
                onClick={handleClick}
            />
            <div className="bg-azul p-16 flex flex-col justify-center items-center gap-8 rounded-sm">
                <img src={mail3d} alt="" className="w-full md:-my-32 -my-16" />
                <h1 className="md:text-6xl text-4xl font-serif">Hit me up!</h1>
                <p className="md:text-2xl text-xl text-white">
                    <a href="mailto:max@maxflores.dev">max@maxflores.dev</a>
                </p>
            </div>
        </motion.div>
    );
};

export default ContactModal;
