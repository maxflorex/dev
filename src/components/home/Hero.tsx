import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../utils/context/AppContext';
import { motion } from 'framer-motion';
import { item, variants } from '../../utils/animations/animate';
import Test from '../../utils/Test'

const Hero = () => {
    return <div className='overflow-hidden'>
        <Test />
    </div>;
};

export default Hero;
