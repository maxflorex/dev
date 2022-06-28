import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { FiYoutube } from 'react-icons/fi';
import { PROJECTS } from '../../graphql/Queries';
import SliderProjects from '../carousel/SliderProjects';

type Props = {};

const Projects = (props: Props) => {
    const { data } = useQuery(PROJECTS);

    const project: any = data?.projects?.data;

    return (
        <div className="container mx-auto pt-32">
            <h1 className="lg:text-4xl text-3xl text-center font-semibold mx-auto text-navy pb-16">
                Some Projects I’ve Built
            </h1>
            <SliderProjects />
        </div>
    );
};

export default Projects;
FiYoutube;
