import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container-fluid page-footer text-center bg-dark pt-5'>
            <div className='p-3'>
                <h6>Flowing on</h6>
                <a target='blank' href="https://www.facebook.com/Rahat.Imon.01/">
                    Facebook</a>
                <a target='blank' href="https://github.com/rahathossain3">Github</a>
                <a target='blank' href="https://www.linkedin.com/in/rahathossain3/">LinkedIn</a>
            </div>

            <div>
                <Link to='/home'>
                    <span className=' text-white px-0'>Copyright ©</span>
                    <span>Md.Rahat Hossain Khan Imon</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;