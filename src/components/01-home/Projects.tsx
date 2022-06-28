import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../graphql/Queries';
import SliderProjects from '../carousel/SliderProjects';

type Props = {};

const Projects = (props: Props) => {
    const { data } = useQuery(PROJECTS);

    const project: any = data?.projects?.data;

    return (
        <div className="container mx-auto pt-32">
            <div className="flex-between">
                <h1 className="lg:text-4xl text-3xl text-left px-8 text-navy font-serif">
                    Some Projects I’ve Built
                </h1>
                <Link to="/projects" className="btn">
                    See More Projects
                </Link>
            </div>
            <SliderProjects />
        </div>
    );
};

export default Projects;
FiYoutube;
