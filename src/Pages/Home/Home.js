import React from 'react';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Myself from './Myself/Myself';
import ContactMe from './ContactMe/ContactMe';
import Footer from '../Sheared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Myself></Myself>
            <Projects></Projects>
            <ContactMe></ContactMe>

            <Footer></Footer>
        </div>
    );
};

export default Home;