import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import Footer from '../../Sheared/Footer/Footer';

const Blogs = () => {

    const { text } = useTypewriter({
        words: ['.......'],
        loop: 0 // Infinit
    })
    return (
        <div className='bg-dark'>
            <div className=' mb-5 py-5 '>

                <h1 className='text-light my-5 py-5'>Blogs are
                </h1>
                <h1 className='title my-5 py-5'>Coming Soon <span> {text}</span>
                </h1>

            </div>
            <div className='mt-5 pt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;