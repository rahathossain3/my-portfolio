import React from 'react';

import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Myself from './Myself/Myself';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Myself></Myself>
            <Projects></Projects>
        </div>
    );
};

export default Home;