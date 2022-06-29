import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../graphql/Queries';

type Props = {
    proId: any;
};

const Navigate = ({ proId }: Props) => {
    const [projects, setProjects] = useState([]);
    const { data } = useQuery(PROJECTS);

    useEffect(() => {
        if (data) {
            setProjects(data.projects.data);
        }
    }, [data]);

    // DELETE CURRENT PROJECT & AND SHOW NAVIGATION
    const res = projects.filter(
        (proId, index, project) =>
            projects.indexOf(proId) && projects.lastIndexOf(proId)
    );

    return (
        <div className="container mx-auto bg-azul w-1/2 rounded-sm mt-32 mb-24">
            <div className="flex justify-center items-center py-24 gap-8 text-off  children:(flex flex-col gap-4 ">
                {res &&
                    res?.slice(0, 2).map((data: any, i: number) => {
                        console.log(data);
                        
                        return (
                            <div key={i}>
                                <h3>Project</h3>
                                <Link to={`/projects/${data.id}` }className="font-serif text-3xl">
                                    {data.attributes.Title}
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Navigate;
