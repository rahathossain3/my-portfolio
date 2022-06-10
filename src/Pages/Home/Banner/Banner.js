import React from 'react';
import './Banner.css';
import MyImage from '../../../Files/my-image.jpg'


const Banner = () => {
    return (
        <section className='text-light p-lg-5 p-md-3 p-2 d-block' id='banner'>
            <img className='my-img' src={MyImage} alt="Md. Rahat Hossain Khan Imon" title='Md. Rahat Hossain Khan Imon' />
            <div >
                <h1 className=' pt-lg-5 pt-3 '><span className='title'>Md. Rahat Hossain Khan Imon</span></h1>
                <h3> I am a </h3>
            </div>
        </section>
    );
};

export default Banner;