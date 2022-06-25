import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO-03.svg';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="flex-between bg-navy">
            <Link to='/'>
                <img src={logo} alt="Logo" className="w-8 h-8 h-full top-0" />
            </Link>
            <nav className="flex gap-8 children:(no-underline text-off font-light font-serif)">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <span>Contact</span>
            </nav>
        </div>
    );
};

export default Navbar;
