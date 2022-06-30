import { Link } from 'react-router-dom';

const Navigate = () => {
    return (
        <div className="container mx-auto  md:w-1/2 rounded-sm mt-32 md:mb-0 mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 py-24 gap-12 text-navy px-8 bg-off">
                <div className="flex flex-col items-start oddy">
                    <h3 className="text-xs font-serif">Project</h3>
                    <Link to={`/projects/`} className="font-serif text-3xl ">
                        Title
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigate;
