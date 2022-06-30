import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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
import SingleProject from './utils/SingleProject';
import { AppContext } from './utils/context/AppContext';
import ProjectSingle from './pages/ProjectSingle';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './components/ComingSoon';

function App() {
    const [photos, setPhotos] = useState('');

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
                const data = res.data;
                setPhotos(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // APOLLO CLIENT
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <AppContext.Provider value={{ photos }}>
            <Router>
                <ApolloProvider client={client}>
                    <ScrollToTop>
                        <Navbar />
                        <AnimatePresence>
                            <Routes>
                                <Route path={'/'} element={<Home />} />
                                <Route path={'/about'} element={<About />} />
                                <Route
                                    path={'/projects'}
                                    element={<Projects />}
                                />
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
                </ApolloProvider>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
