import React from 'react';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Myself from './Myself/Myself';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Myself></Myself>
            <Projects></Projects>
            <ContactMe></ContactMe>

        </div>
    );
};

export default Home;