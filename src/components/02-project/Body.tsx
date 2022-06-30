import { useState } from 'react';
import ExpandImageModal from '../modals/ExpandImageModal';

type Project = { pro: any };

const Body = ({ pro }: Project) => {
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleClick = (data: any) => {
        setSelectedImage(`http://localhost:1337${data?.attributes?.url}`);
        setShowImage(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };
    return (
        <>
            <div className="col-span-3 md:(col-span-2) px-4">
                <div className="flex flex-col gap-16">
                    {pro.Banner && (
                        <img
                            src={`http://localhost:1337${pro.Banner.data[0].attributes.url}`}
                            alt="Banner"
                            className=""
                        />
                    )}
                    <p className="md:w-1/2 self-start leading-loose text-justify">
                        {pro.Summary}
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:(gap-8 grid-cols-3)">
                        {pro.Photos &&
                            pro.Photos.data.map((data: any, i: number) => {
                                return (
                                    <img
                                        key={i}
                                        src={`http://localhost:1337${data.attributes.url}`}
                                        alt="Banner"
                                        className="w-full object-cover h-full self-start border-solid-4 border-off/40 rounded-sm hover:scale-105 cursor-pointer"
                                        onClick={() => handleClick(data)}
                                    />
                                );
                            })}
                    </div>
                    <p className="md:w-1/2 self-start leading-loose text-justify">
                        {pro.Features}
                    </p>
                    <div className="grid grid-cols-4 gap-4 md:(grid-cols-6 gap-8)">
                        {pro.Responsive &&
                            pro.Responsive.data.map((data: any, i: number) => {
                                return (
                                    <img
                                        key={i}
                                        src={`http://localhost:1337${data.attributes.url}`}
                                        alt="Banner"
                                        className="w-full object-cover h-full self-start border-solid-4 border-off/40 rounded-sm hover:scale-105 cursor-pointer"
                                        onClick={() => handleClick(data)}
                                    />
                                );
                            })}
                    </div>
                    <p className="md:w-1/2 self-start leading-loose text-justify">
                        {pro.Complexity}
                    </p>
                </div>
            </div>
            {showImage && (
                <ExpandImageModal url={selectedImage} show={setShowImage} />
            )}
        </>
    );
};

export default Body;
