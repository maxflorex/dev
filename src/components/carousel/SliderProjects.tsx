import { useQuery } from '@apollo/client';
import { PROJECTS } from '../../graphql/Queries';
import Slider from './Slider';
import { BsGithub, BsGlobe } from 'react-icons/bs';

const SliderProjects = () => {
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

                        return (
                            <div
                                key={i}
                                className="slidesingle flex flex-col md:flex-row gap-4 items-center box-border"
                            >
                                <section className="border border-off/20 outline-8 my-0 rounded-sm overflow-hidden w-full">
                                    <img
                                        src={`http://localhost:1337${banner}`}
                                        alt="Logo Tech"
                                        className="object-contain w-full shadow opacity-50 hover:opacity-80 rounded-sm"
                                        // style={{filter: 'grayscale(100%)'}}
                                    />
                                </section>
                                <section className="flex flex-col gap-4 py-4 w-full">
                                    <div className="flex-between my-0">
                                        <h1 className="text-4xl font-serif text-center md:text-left">
                                            {data.attributes.Title}
                                        </h1>
                                        <div className="flex gap-8 pr-8 text-rosa">
                                            <a href={data.attributes.Github}>
                                                <BsGithub />
                                            </a>
                                            <a href={data.attributes.Website}>
                                                <BsGlobe />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-justify bg-navy px-16 py-12 md:(-ml-40 py-16 pl-24 pr-56 -mr-32) z-10 rounded-sm text-off">
                                        {data.attributes.Summary}
                                    </p>
                                    <div className="flex gap-4 justify-between flex-wrap-reverse mt-8 pl-8">
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
