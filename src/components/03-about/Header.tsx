import React from 'react'
import pic from '../../assets/3.png';

const Header = () => {
  return (
      <div className='flex-center bg-navy py-24 gap-0' >
                       <img
                    src={pic}
                    alt="3d"
                    className="h-96 -m-8 object-contain pb-16"
                />
          {/* <h1 className='font-serif text-off text-6xl text-center'>I'm Max Flores</h1> */}
      </div>
  );
};

export default Header