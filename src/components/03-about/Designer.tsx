import pic from '../../assets/BlackPortrait.webp';

type Props = {};

const Designer = (props: Props) => {
    return (
        <div className="grid grid-cols-1 lg:(grid-cols-2 w-2/3 px-0) container mx-auto w-full py-0 px-4">
            <div className="flex flex-col items-start py-16 px-0 w-full lg:(px-16 ml-40 -mb-40 -mr-40 mt-40) gap-16  z-20">
                <h1 className="font-serif text-4xl">A Web Developer</h1>
                <p className="text-justify leading-loose lg:(bg-off/90 backdrop-blur-lg p-8 -m-8) ">
                    I was often finding myself frustrated because of the
                    reliance on third-party plugins to achieve my goals. That
                    feeling lit up the path I follow until this day, I knew I
                    had to create my own code and functions to find solutions
                    for the features I wanted to implement. So, I started my
                    journey as a frontend developer by learning javascript and
                    improving my previous knowledge by practicing CSS and
                    semantic HTML. After working as a designer for over a
                    decade, I was fortunate enough to land full-time employment
                    as a web developer. I've been building apps from scratch for
                    a variety of purposes ever since.
                </p>
            </div>
            <img
                src={pic}
                alt=""
                className="w-full h-full object-cover rounded-sm opacity-80 hover:(opacity-100)"
            />
            <div></div>
            <div className="py-4 flex flex-col gap-4 items-end lg:w-2/3 ml-auto justify-end">
                <h3 className="font-serif italic">
                    Some of my favorite apps for development:
                </h3>
                <ul className="flex flex-wrap gap-4 children:(bg-off py-1 px-2 rounded-sm) items-end ">
                       <li>Typescript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>MongoDb</li>
                    <li>NodeJS</li>
                </ul>
            </div>
        </div>
    );
};

export default Designer;
