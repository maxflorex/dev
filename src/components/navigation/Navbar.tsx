import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO-03.svg';
import ContactModal from '../modals/ContactModal';

type Props = {};

const Navbar = (props: Props) => {
    const [showContact, setShowContact] = useState(false);

    const handleClick = (e: any) => {
        setShowContact(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };

    return (
        <div className="flex-between z-10 fixed top-0 w-full items-start">
            <Link to="/">
                <img src={logo} alt="Logo" className="w-8 h-8 h-full top-0" />
            </Link>
            <nav className="flex gap-8 children:(no-underline text-off font-light font-serif)">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <span className="cursor-pointer" onClick={handleClick}>
                    Contact
                </span>
            </nav>
            {showContact && <ContactModal setShowContact={setShowContact} />}
        </div>
    );
};

export default Navbar;
