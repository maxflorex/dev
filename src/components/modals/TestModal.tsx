import { motion } from 'framer-motion';

type Props = {
    url: any;
    setShow: any;
};

const TestModal = ({ url, setShow }: Props) => {
    const handleShow = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            setShow(false);
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
            className="absolute bg-white/10 dismiss flex-center top-0 left-0 overflow-hidden"
            onClick={(e) => handleShow(e)}
        >
            <img src={url} alt="alt" className="max-w-2/3 max-h-2/3" />
            <h1>{url}</h1>
        </motion.div>
    );
};

export default TestModal;
