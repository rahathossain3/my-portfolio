import React from 'react';
import './Myself.css';
import MyImage2 from '../../../Files/my-image2.png'
import { useTypewriter } from 'react-simple-typewriter';

const Myself = () => {

    const { text } = useTypewriter({
        words: ['Full Stack Web Developer', 'Graphic Designer', 'React Developer'],
        loop: 0 // Infinit
    })

    return (
        <div className='container-fluid text-light p-3 p-lg-5 p-3 p-md-4 p-sm-2 pt-3 bg-dark'>

            <div className='left-border text-left ps-2 mb-5 mt-3'>
                <h1 >
                    ABOUT ME
                </h1>
                <h6 className='text-warning'> Main informations about me</h6>
            </div>

            <div className='mt-5 d-flex flex-lg-row-reverse'>
                <img src={MyImage2} className='w-25 outline about-img' alt="Md. Rahat Hossain Khan Imon" />

                <div className=' about-text w-75 mx-auto'>
                    <h3 className='my-4 mx-4'>
                        <span className=' text-warning'>I'm </span>
                        MD. Rahat Hossain Khan Imon.
                    </h3>
                    <h5 className='my-4 mx-4'>
                        I'm a
                        <span className='title'> {text} </span>
                    </h5>

                    <p className='my-4 fs-6 mx-lg-5 pe-lg-4 mx-sm-3 text-align-justify'>

                        <span className='mt-3 '>Assalamu alaikum. Welcome to my LinkedIn Profile.! My name is Md. Rahat Hossain Khan Imon. To gain my confidence and fame using my potential in this position, and express my innovative creative skills for self and company growth. I’m a hardworking and quick learner. I believe hard work is the only way to success. I love to learn new technology and try to improve myself with technology. </span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Myself;