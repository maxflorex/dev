import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
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
        <>
            <div className="flex justify-between items-center bg-navy z-50 px-4 py-4">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-8 h-8 h-full top-0 hover:(animate-spin animate-duration-500"
                    />
                </Link>
                <nav className="flex md:gap-8 gap-4 children:(no-underline text-off font-light font-serif)">
                    {/* <Link to="/">Home</Link> */}
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <span className="cursor-pointer" onClick={handleClick}>
                        Contact
                    </span>
                    <a href="https://github.com/maxflorex/dev">
                        <BsGithub />
                    </a>
                </nav>
            </div>
            {showContact && <ContactModal setShowContact={setShowContact} />}
        </>
    );
};

export default Navbar;
