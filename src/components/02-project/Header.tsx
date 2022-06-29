import React from 'react';

type Props = {
    project: any;
};

const Header = ({ project }: Props) => {
    return (
        <div className='flex-center bg-navy pt-16 pb-32 gap-0' >
          <p className='text-rosa'>- Project - </p>
            <h1 className='font-serif text-off text-6xl text-center'>{project.Title}</h1>
        </div>
    );
};

export default Header;
