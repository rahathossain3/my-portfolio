import React from 'react';
import './Banner.css';
import MyImage from '../../../Files/my-image.jpg'
import { useTypewriter } from 'react-simple-typewriter'

const Banner = () => {

    const { text } = useTypewriter({
        words: ['Full Stack Web Developer', 'Graphic Designer', 'React Developer'],
        loop: 0 // Infinit
    })

    return (
        <section className='text-light p-lg-5 p-md-3 p-2 d-block' id='banner'>
            <img className='my-img' src={MyImage} alt="Md. Rahat Hossain Khan Imon" title='Md. Rahat Hossain Khan Imon' />

            <div >
                <h1 className=' pt-lg-5 pt-3 '><span className='text-white mouse-hover'>Md. Rahat Hossain Khan Imon</span></h1>

                <h3 className='pt-2'>
                    I am a
                    <span className='title'>
                        <span> {text}</span>
                    </span>
                </h3>

                <button className='btn btn-outline-dark fs-5 mt-3 btn-hover text-light' >Download Resume</button>
            </div>
        </section>
    );
};

export default Banner;