import { useState } from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../assets/dev-14-08.svg';
import ContactModal from '../modals/ContactModal';
import { CgMenu } from 'react-icons/cg';

type Props = {};

const Navbar = (props: Props) => {
    const [showContact, setShowContact] = useState(false);
    const [modalMenu, setModalMenu] = useState(false);

    const handleClick = (e: any) => {
        setShowContact(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };

    const handleMenu = (e: any) => {
        setModalMenu(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };

    return (
        <>
            <div className="flex justify-between items-center z-50 md:px-8 md:py-8 p-2 absolute top-0 w-full">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="md:w-16 w-12  top-0 hover:(animate-pulse animate-duration-500)"
                    />
                </Link>
                <nav className="flex md:gap-8 gap-4 children:(text-white) items-center">
                    <div className="md:flex gap-8 hidden">
                        <Link
                            to="/about"
                            className="hover:(underline scale-110 text-navy) underline-offset-8 font-semibold text-white shade"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="hover:(underline scale-110 text-navy) underline-offset-8 font-semibold text-white shade"
                        >
                            Projects
                        </Link>
                        <span
                            className="cursor-pointer hover:(underline scale-110 text-navy) underline-offset-8 font-semibold text-white shade"
                            onClick={handleClick}
                        >
                            Contact
                        </span>
                    </div>
                    <a
                        href="https://github.com/maxflorex"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub className="text-white shade text-3xl leading-none hover:text-navy" />
                    </a>
                    <a
                        href="https://twitter.com/max01011001"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter className="text-white shade text-3xl leading-none hover:text-navy" />
                    </a>
                    <span>
                        <CgMenu
                            className="text-white shade text-3xl leading-none hover:text-navy md:hidden block"
                            onClick={handleMenu}
                        />
                    </span>
                </nav>
            </div>
            {showContact && <ContactModal setShowContact={setShowContact} />}
        </>
    );
};

export default Navbar;
