import { useQuery } from '@apollo/client';
import { PROJECTS } from '../../graphql/Queries';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type Props = {};

const ProjectList = (props: Props) => {
    const { data } = useQuery(PROJECTS);
    const project: any = data?.projects?.data;

    return (
        <div className="w-full rounded-md py-16 md:px-8 px-4 container mx-auto flex flex-col gap-24 mb-24">
            {data &&
                project?.map((data: any, i: number) => {
                    const banner =
                        data.attributes.Banner.data[0].attributes.url;
                    const stack = data.attributes.tech_stacks.data;

                    return (
                        <div
                            key={i}
                            className="slidesingle flex flex-col md:flex-row gap-4 items-center box-border md:even:flex-row-reverse"
                        >
                            <section className="border border-off/20 outline-8 my-0 rounded-sm overflow-hidden w-full relative">
                                <img
                                    src={`http://localhost:1337${banner}`}
                                    alt="Logo Tech"
                                    className="object-contain w-full shadow opacity-50 hover:opacity-80 rounded-sm"
                                    // style={{filter: 'grayscale(100%)'}}
                                />
                                <Link
                                    to={`/projects/${data.id}`}
                                    className="btn2 absolute md:(top-4 left-4 bottom-auto right-auto) bottom-4 right-4"
                                >
                                    View Full Project
                                </Link>
                            </section>
                            <section className="flex flex-col gap-4 py-4 w-full md:px-16 px-0">
                                <div className="flex justify-between items-center my-0 md:pl-8 flex-wrap gap-2">
                                    <Link
                                        to={`/projects/${data.id}`}
                                        className="text-4xl font-serif text-center md:text-left hover:scale-110"
                                    >
                                        {data.attributes.Title}
                                    </Link>
                                    <div className="flex gap-8 md:pr-8 text-azul">
                                        <a href={data.attributes.Github}>
                                            <BsGithub />
                                        </a>
                                        <a href={data.attributes.Website}>
                                            <BsGlobe />
                                        </a>
                                    </div>
                                </div>
                                <p className="leading-loose text-justify md:px-8 px-0">
                                    {data.attributes.Summary}
                                </p>
                                <div className="flex gap-4 justify-between flex-wrap-reverse mt-2 md:(pl-8 mt-8)pl-0">
                                    <ul className="flex gap-4 flex-wrap">
                                        {stack.map((data: any, i: number) => (
                                            <li
                                                key={i}
                                                className="text-xs md:text-sm font-serif bg-off px-2 py-1 rounded-sm"
                                            >
                                                {data.attributes.Title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProjectList;
