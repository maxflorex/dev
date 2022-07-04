import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { AppContext } from './utils/context/AppContext';
import ProjectSingle from './pages/ProjectSingle';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './components/ComingSoon';

function App() {
    const [projects, setProjects] = useState([]);
    const [stack, setStack] = useState([]);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_PROJECTS)
            .then((res) => {
                const data = res.data;
                setProjects(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_STACK)
            .then((res) => {
                const data = res.data;
                setStack(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Router>
            <AppContext.Provider value={{ projects, stack }}>
                <ScrollToTop>
                    <Navbar />
                    <AnimatePresence>
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                            <Route path={'/about'} element={<About />} />
                            <Route path={'/projects'} element={<Projects />} />
                            <Route
                                path={'/projects/:id'}
                                element={<ProjectSingle />}
                            />
                            <Route path={'/resume'} element={<Resume />} />
                            <Route
                                path={'/coming-soon'}
                                element={<ComingSoon />}
                            />
                        </Routes>
                    </AnimatePresence>
                    <Footer />
                </ScrollToTop>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
