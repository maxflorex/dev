import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/dev-14-03.svg';
import ContactModal from './ContactModal';

type Props = {
    show: any;
};

const ModalMenu = ({ show }: Props) => {
    const [showContact, setShowContact] = useState(false);
    const navigate = useNavigate();

    const handleShow = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            show(false);
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    const handleNavigate = (page: string, e: any) => {
        navigate(page);
        show(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
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
            className="fixed bg-white/90 dismiss flex-center gap-8 top-0 left-0 overflow-hidden dismiss z-50 backdrop-blur-2xl blurry pb-32"
            onClick={handleShow}
        >
            <AiOutlineClose
                className="fixed top-8 right-8 text-2xl dismiss cursor-pointer hover:animate-spin z-20 text-navy"
                onClick={handleShow}
            />
            <div className="fixed bottom-16 w-full flex justify-center">
                <img src={logo} alt="" className="w-40" />
            </div>
            <button
                onClick={(e) => handleNavigate('/projects', e)}
                className="text-4xl"
            >
                Projects
            </button>
            <button
                onClick={(e) => handleNavigate('/about', e)}
                className="text-4xl"
            >
                My Journey
            </button>
            <button onClick={() => setShowContact(true)} className="text-4xl">
                Contact
            </button>
            {showContact && <ContactModal setShowContact={setShowContact} />}
        </motion.div>
    );
};

export default ModalMenu;
