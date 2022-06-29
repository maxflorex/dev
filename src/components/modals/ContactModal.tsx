import { motion } from 'framer-motion';
import { AiOutlineClose } from "react-icons/ai";

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
            className="fixed bg-white/95 dismiss flex-center top-0 left-0 overflow-hidden dismiss z-50 backdrop-blur-2xl"
            onClick={handleClick}
        >
            <AiOutlineClose className='fixed top-8 right-8 text-2xl dismiss cursor-pointer hover:animate-spin' onClick={handleClick}/>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block font-serif tracking-wide text-navy text-xs mb-2 text-xl">
                            First Name
                        </label>

                        <input
                            className="appearance-none block w-full bg-off text-navy border border-off rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-azul"
                            id="grid-last-name"
                            type="text"
                            placeholder="John"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block font-serif tracking-wide text-navy text-xs mb-2 text-xl">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-off text-navy border border-off rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-azul"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block font-serif tracking-wide text-navy text-xs mb-2 text-xl">
                            E-mail
                        </label>
                        <input
                            className="appearance-none block w-full bg-off text-navy border border-off rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-azul"
                            id="email"
                            type="email"
                            placeholder="you@email.com"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block font-serif tracking-wide text-navy text-xs mb-2 text-xl">
                            Message
                        </label>
                        <textarea
                            className=" no-resize appearance-none block w-full bg-off text-navy border border-off rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-azul h-48 resize-none"
                            id="message"
                            placeholder="Place your message here..."
                        ></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="btn" type="button">
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactModal;
