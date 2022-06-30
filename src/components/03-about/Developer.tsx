import React from 'react';
import pic1 from '../../assets/ph1.webp';
import pic2 from '../../assets/ph2.webp';
import pic3 from '../../assets/ph3.webp';
import pic4 from '../../assets/ph4.webp';

type Props = {};

const Developer = (props: Props) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto w-2/3 py-24">
            <div className="grid grid-cols-2 gap-4">
                <img
                    src={pic1}
                    alt="collage"
                    className="w-full h-full object-cover rounded-sm opacity-80 hover:(opacity-100)"
                />
                <img
                    src={pic2}
                    alt="collage"
                    className="w-full h-full object-cover rounded-sm opacity-80 hover:(opacity-100)"
                />
                <img
                    src={pic3}
                    alt="collage"
                    className="w-full h-full object-cover rounded-sm opacity-80 hover:(opacity-100)"
                />
                <img
                    src={pic4}
                    alt="collage"
                    className="w-full h-full object-cover rounded-sm opacity-80 hover:(opacity-100)"
                />
            </div>
            <div className="flex flex-col items-end py-16 px-0 w-full lg:(px-16 -ml-40 -mb-40 mr-40 mt-40) gap-16  z-20">
                <h1 className="font-serif text-4xl self-end">
                    A Graphic Artist
                </h1>
                <p className="text-justify leading-loose lg:(bg-off/90 backdrop-blur-lg p-8 -m-8) ">
                    After this journey, I decided to go to college and continue
                    my path in the industry. At that time, web development was
                    far from becoming what it is today, so I left my artistic
                    instincts to guide me and I went for a degree in graphic
                    arts. While still in college, I started working as a graphic
                    designer. Throughout the years I acquire experience in all
                    graphics-related fields such as print mediums, illustration,
                    photography, and 3D, among many others. None was as highly
                    viewed as user interfaces and experiences. I started
                    learning, practicing, and doing freelance ux/ui jobs in
                    2015. In this same period, I was doing websites with cms
                    services like WordPress and Wix. In 2017 I was mostly
                    working as a freelance WordPress developer on online
                    platforms like Elance (Now Upwork) and Guru.
                </p>
            </div>
            <div className="py-4 flex flex-col gap-4 lg:w-2/3">
                <h3 className="font-serif italic">
                    Some of my favorite apps for design:
                </h3>
                <ul className="flex flex-wrap gap-4 children:(bg-off py-1 px-2 rounded-sm)">
                    <li>Adobe Creative Cloud</li>
                    <li>Cinema 4D</li>
                    <li>Figma</li>
                    <li>Procreate</li>
                    <li>Spline</li>
                </ul>
            </div>
        </div>
    );
};

export default Developer;
