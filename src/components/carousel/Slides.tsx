import React, { useContext, useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { AppContext } from '../../utils/context/AppContext';
import Slider from './Slider';

type Props = {};

const Slides = (props: Props) => {
    const { art, photos } = useContext(AppContext);
    const [width, setWidth] = useState('');
    const [clickedItem, setClickedItem] = useState('');
    const [show, setShow] = useState(0);
    const [random, setRandom] = useState({});

    // GET CONTEXT VALUE
    const { w } = useContext(AppContext);

    // CHANGE SLIDE WIDTH WITH SCREEN CHANGE
    useEffect(() => {
        if (w >= 1280) {
            setWidth(`${w} / 8`);
        } else if (w > 650) {
            setWidth(`${w} / 6`);
        } else if (w < 650) {
            setWidth(`${w} /46`);
        }
    }, [w]);

    console.log(w);
    
    return (
        <>
            <div className="w-full rounded-md py-24 container mx-auto">
                <Slider
                    autoplay={false}
                    navigation={true}
                    speed={500}
                    interval={5000}
                >
                    {photos &&
                        photos?.slice(0, 10).map((data: any, i: number) => (
                            <div
                                key={i}
                                className="relative"
                                onMouseEnter={() => setShow(i)}
                                onMouseLeave={() => setShow(0)}
                            >
                                <div
                                    className="p-8 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 md:hover:bg-off-1 rounded-md"
                                    style={{ width: `${width}px` }}
                                >
                                    <div className="flex h-40 md:h-64 my-4 overflow-hidden rounded-md">
                                        <img
                                            src={data.url}
                                            alt="Artwork"
                                            className="object-cover group-hover:scale-105 self-end opacity-80 group-hover:opacity-100 h-full w-full bg-off-3"
                                        />
                                    </div>
                                    <h1 className="font-semibold text-sm pb-1 capitalize">
                                        {data.title.toLowerCase()}
                                    </h1>
                                    <div className="flex justify-between flex-wrap capitalize text-xs">
                                        <p>{data.medium}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </>
    );
};

export default Slides;
