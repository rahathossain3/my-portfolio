import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner/Banner';
// import Myself from './Myself/Myself';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Myself></Myself> */}
            <Projects></Projects>
        </div>
    );
};

export default Home;