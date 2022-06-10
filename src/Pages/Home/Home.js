import React from 'react';

import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Myself from './Myself/Myself';
import Footer from '../Sheared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Myself></Myself>
            <Projects></Projects>

            <Footer></Footer>
        </div>
    );
};

export default Home;