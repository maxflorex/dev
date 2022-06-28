import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../assets/3.png';

type Props = {};

const AboutMe = (props: Props) => {
    return (
        <div className="container mx-auto px-4 bg-azul md:mb-40 rounded-sm">
            <div className="flex flex-col py-16">
                <img
                    src={pic}
                    alt="3d"
                    className="h-96 -mt-40 object-contain"
                />
                <div className="flex flex-col gap-4 place-content-center pb-16  lg:w-1/2 mx-auto px-16">
                    <h1 className="font-serif text-4xl text-left">Who am I?</h1>
                    <p className="leading-loose text-justify pt-4">
                        I am a web developer with an extensive background in
                        graphic arts. While finishing my studies as a designer,
                        I was introduced to UX/UI terms and I inmediately feel
                        in love with the magnitude of this new context. This
                        made me explore different routes in my design career. I
                        started putting websites together and working as
                        freelance web designer in online platforms like ELance
                        (Now known as Upwork), Guru, Fiverr, among others. Web
                        development / coding / programming has become a lifestyle for me...
                    </p>
                    <Link
                        to="/about"
                        className="btn mt-8 md:ml-auto hover:bg-rosa"
                    >
                        My Journey
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
