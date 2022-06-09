import React from 'react';
import Projects from '../Projects/Projects';
import Myself from './Myself/Myself';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Myself></Myself>
            <Projects></Projects>
        </div>
    );
};

export default Home;