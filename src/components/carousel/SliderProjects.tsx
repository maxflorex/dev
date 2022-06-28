import { useQuery } from '@apollo/client';
import React from 'react';
import { PROJECTS } from '../../graphql/Queries';
import Slider from './Slider';
import { BsGithub, BsGlobe } from 'react-icons/bs';

type Props = {};

const SliderProjects = (props: Props) => {
    const { data } = useQuery(PROJECTS);
    const project: any = data?.projects?.data;

    return (
        <div className="w-full rounded-md py-16 px-8 container mx-auto">
            <Slider navigation={true} autoplay={false} speed={300}>
                {data &&
                    project?.map((data: any, i: number) => {
                        const banner =
                            data.attributes.Banner.data[0].attributes.url;
                        const stack = data.attributes.tech_stacks.data;
                        console.log(data.attributes.Github);

                        return (
                            <div
                                key={i}
                                className="slidesingle flex flex-col md:flex-row xl:gap-16 md:gap-8 gap-4 xl:px-40 items-center box-border"
                            >
                                <section className="outline outline-off/20 outline-8 my-auto rounded-sm overflow-hidden w-full">
                                    <img
                                        src={`http://localhost:1337${banner}`}
                                        alt="Logo Tech"
                                        className="object-contain w-full shadow opacity-50 hover:opacity-80"
                                        // style={{filter: 'grayscale(100%)'}}
                                    />
                                </section>
                                <section className="flex flex-col gap-8 py-4 px-8 w-full">
                                    <h1 className="text-4xl font-serif text-center md:text-left">
                                        {data.attributes.Title}
                                    </h1>
                                    <p className="leading-loose text-justify text-sm">
                                        {data.attributes.Summary}
                                    </p>
                                    <div className="flex gap-4 justify-between flex-wrap-reverse">
                                        <ul className="flex gap-4 flex-wrap">
                                            {stack.map(
                                                (data: any, i: number) => (
                                                    <li
                                                        key={i}
                                                        className="text-xs md:text-sm font-serif bg-off px-2 py-1 rounded-sm"
                                                    >
                                                        {data.attributes.Title}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="flex gap-8">
                                            <a href={data.attributes.Github}>
                                                <BsGithub />
                                            </a>
                                            <a href={data.attributes.Website}>
                                                <BsGlobe />
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        );
                    })}
            </Slider>
        </div>
    );
};

export default SliderProjects;
