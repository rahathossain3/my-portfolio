import React from 'react';
import './Myself.css'

const Myself = () => {
    return (
        <div className='container-fluid text-center p5 py-5 bg-dark'>
            <h1 className=' text-white '>About My self</h1>
            <div className=' mt-5 outline'>
                <img className='my-img'
                    src="https://avatars.githubusercontent.com/u/96797007?v=4"
                    alt="Md. Rahat Hossain Khan Imon"
                    title='Md. Rahat Hossain Khan Imon' />

                <div className=' about-text w-75 mx-auto'>
                    <h3 className='my-4 mx-2'>
                        <span className=' text-warning'>Name : </span>
                        MD. Rahat Hossain Khan Imon
                    </h3>

                    <h5 className='my-4 mx-2'>
                        <span className=' text-warning'>My Goals : </span>
                        <br /><br />
                        <span className='mt-3'>Want to make my self a good and respected Web developer and Designer also a Graphic Designer.
                            Work for Helpless people make their happiness.  To build a pollution less better world for human.  </span>
                    </h5>


                </div>
            </div>
        </div>
    );
};

export default Myself;