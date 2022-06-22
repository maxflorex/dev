import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import SingleProject from './pages/SingleProject';
import { AppContext } from './utils/context/AppContext';

function App() {
    const [photos, setPhotos] = useState([]);

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

    return (
        <AppContext.Provider value={{ photos }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/projects'} element={<Projects />} />
                    <Route path={'/projects/:id'} element={<SingleProject />} />
                    <Route path={'/resume'} element={<Resume />} />
                </Routes>
                <Footer />
            </Router>
        </AppContext.Provider>
    );
}

export default App;
