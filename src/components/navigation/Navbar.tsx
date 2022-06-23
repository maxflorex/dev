import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="flex-center">
            <h1 className='text-2xl'>Max Flores</h1>
            <nav className='flex gap-2 children:(no-underline)'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/projects'>Projects</Link>
            </nav>
        </div>
    );
};

export default Navbar;
