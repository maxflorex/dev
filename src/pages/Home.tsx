import Animation from '../components/01-home/Spline.js';
import SlidesTechLove from '../components/carousel/SlidesTechLove.js';
import Projects from '../components/01-home/Projects';
import BackendCms from '../components/01-home/BackendCms.js';
import HireMe from '../components/01-home/HireMe.js';
import AboutMe from '../components/01-home/AboutMe.js';

const Home = () => {
    return (
        <>
            <div className="bg py-24 h-full blurry">
                <div className="container mx-auto flex flex-wrap-reverse items-center px-4 py-6 md:h-60vh h-50vh">
                    <div className="flex lg:items-start items-start justify-center flex-col font-serif md:w-1/2 mt-16 md:mt-0 z-40">
                        <p className="md:text-4xl text-2xl text-white text-left shade ">
                            Hi, I'm Max
                        </p>
                        <div className="lg:(text-8xl text-left) text-5xl text-left leading-tight pb-8 pt-4">
                            <h1 className="text-navy font-sans font-bold">
                                Frontend Developer
                            </h1>
                            <h1 className="text-rosa">& Designer</h1>
                        </div>
                    </div>
                    <Animation />
                </div>
            </div>
            <SlidesTechLove />
            <Projects />
            <BackendCms />
            <HireMe />
            <AboutMe />
        </>
    );
};

export default Home;
