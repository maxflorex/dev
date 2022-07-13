import React from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';

type Project = { pro: any };

const Sidebar = ({ pro }: Project) => {

    console.log(pro);
    
    
    return (
        <div className="flex flex-col h-full gap-2 p-8 col-span-3 md:(col-span-1 p-8)">
            <div className="hidden md:block flex flex-col gap-2">
                <p className="text-xs font-serif">Project Title:</p>
                <p className="text-2xl font-serif"> {pro.Title}</p>
                <p className="font-serif text-xs mx-auto rounded-sm w-auto">
                    Web Application
                </p>
            </div>

            {/* STACK */}

            <div className="pb-4 md:flex hidden flex-col justify-start flex-wrap items-start md:(pb:16 py-16 block)">
                <h3 className="text-2xl font-serif pr-4 pb-6">Stack</h3>
                <div className="text-xs flex-wrap flex flex-row gap-4pt-4 md:(flex-col)">
                    {pro?.tech_stacks &&
                        pro.tech_stacks.data.map((data: any, i: number) => {
                            return <h1 key={i}>{data.attributes.Title}</h1>;
                        })}
                </div>
            </div>

            {/* LIBRERIES

            <div className="pb-4 flex items-center md:(pb:16 py-0 block)">
                <h3 className="text-2xl font-serif pr-4">Libraries</h3>
                <div className="text-xs flex flex-row gap-2 pt-4 md:(flex-col)">
                    <h1>Example 1</h1>
                    <h1>Example 2</h1>
                    <h1>Example 3</h1>
                </div>
            </div> */}

            {/* LINKS */}

            <div className="flex justify-center gap-0 my-0 md:(my-16 justify-start) children:(bg-navy text-white py-2 px-4 text-sm) rounded-sm justify-end items-center font-serif text-navy">
                <a className="hover:bg-azul" href={pro.Github}>
                    <div className="flex items-center gap-2">
                        <BsGithub />
                        Repo
                    </div>
                </a>
                <a className="hover:bg-azul" href={pro.Website}>
                    <div className="flex items-center gap-2">
                        <BsGlobe />
                        Live
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
