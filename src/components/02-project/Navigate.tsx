import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../utils/context/AppContext';

type Props = {
    proId: any;
};

const Navigate = ({ proId }: Props) => {
    const [indexed, setIndexed] = useState([]);
    const [random, setRandom] = useState([]);
    const { projects } = useContext(AppContext);

    const navi = useNavigate();

    // FISHER-YATES ALGORITHM - SHUFFLE FUNCTION
    const shuffled = (arr: any) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const a = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[a];
            arr[a] = temp;
        }
        return arr;
    };

    // DELETE CURRENT PROJECT & FILTER A NEW ARRAY
    useEffect(() => {
        if (projects) {
            let index = projects.filter((x: any) => {
                let result = x.id !== proId;
                return result;
            });
            index.length > 1 && setIndexed(index);
        }
    }, [projects, proId]);

    useEffect(() => {
        indexed && setRandom(shuffled(indexed));
    }, [indexed]);

    console.log(indexed);
    

    return (
        <div className="container mx-auto md:(w-1/2 mb-24) rounded-sm mt-32 mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 py-24 gap-12 text-navy px-8 bg-off">
                {random?.slice(0, 2).map((data: any, i: number) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-col md:(items-start) items-end oddy"
                        >
                            <h3 className="text-xs font-serif">Project</h3>
                            <Link
                                to={`/projects/${data.id}`}
                                className="font-serif text-3xl "
                            >
                                {data.attributes.Title}
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* <div className="py-24 flex-center">
                <Link
                    to="/coming-soon"
                    className=" mx-auto text-4xl leading-none py-auto flex flex-col gap-2 group"
                >
                    <h1 className="text-3xl md:text-4xl text-center group-hover:text-rosa font-200">
                        Other Projects
                    </h1>
                    <div className="flex gap-2 items-center justify-center group-hover:text-rosa">
                        <p className="text-sm font-serif">& Case Studies</p>
                        <IoIosArrowRoundForward className="text-xl" />
                    </div>
                </Link>
            </div> */}
        </div>
    );
};

export default Navigate;
