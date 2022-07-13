import { gql, useQuery } from '@apollo/client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Body from '../components/02-project/Body';
import Header from '../components/02-project/Header';
import Navigate from '../components/02-project/Navigate';
import Sidebar from '../components/02-project/Sidebar';

type Props = {};

const ProjectSingle = (props: Props) => {
    const { id } = useParams();
    const [pro, setPro] = useState([]);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_PROJECT + '/' + id + '?populate=*')
            .then((res) => {
                const data = res.data;
                setPro(data.data.attributes);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className=''>
            <Header project={pro} />
            <div className="w-auto flex flex-wrap gap-4 items-center justify-center children:(list-none font-serif bg-off p-2 rounded-sm) text-xs container mx-auto py-6 -m-10">
                <h2 className="!bg-azul text-off p-2 rounded-sm">My Role:</h2>
                <li>Branding</li>
                <li>UX</li>
                <li>UI</li>
                <li>Frontend</li>
                <li>Backend</li>
            </div>
            <div className="grid grid-cols-3 gap-8 container mx-auto mt-8 md:(mb-8 mt-24 gap-16)">
                <Sidebar pro={pro} />
                <Body pro={pro} />
            </div>
            <Navigate proId={id} />
        </div>
    );
};

export default ProjectSingle;
