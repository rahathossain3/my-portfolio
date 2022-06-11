import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form } from 'react-bootstrap';
import './ContactMe.css'


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9zray8o', 'template_uaejr9q', form.current, 'QhuIA3-ccdKGfY5N8')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='container-fluid text-light p-3 p-lg-5 p-3 p-md-4 p-sm-2 pt-5 bg-dark' >

            <div className='left-border text-left ps-2 mb-3 mt-3'>
                <h1 >
                    CONTACT <span className='title'>ME</span>
                </h1>
                <h6 className='text-warning'> Get in touch with me</h6>
            </div>

            <div className="duel-item justify-content-between text-left pb-1">
                <div className=' ps-5 mb-3 mt-3 px-5 item'>
                    <h3 className='mt-5 mb-2'>Get in <span className='title'>Touch </span> </h3>
                    <hr className='p-1 ' />
                    <h5 className='mt-5'>
                        <span className='title'>Address : </span>
                        <span >Barishal Sadar, Barishl, Bangladesh</span>
                    </h5>
                    <h5> <span className='title'>Email : </span> rahathossain210@gmail.com </h5>
                    <h5> <span className='title'>Phone : </span> 01849831307, 01904596455 </h5>
                    <h5> <span className='title'>LinkedIn : </span> <a target='blank' href="https://www.linkedin.com/in/rahathossain3/"> Md.Rahat Hossain Khan Imon</a> </h5>

                </div>
                <div className='item px-2'>
                    <Form ref={form} onSubmit={sendEmail} >
                        <Form.Group className="mb-3" controlId="floatingText">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="user_name" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Your Email address</Form.Label>
                            <Form.Control type="email" name="user_email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="floatingTextarea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" type="text" name="message" placeholder="Your Message here" />
                        </Form.Group>


                        <Button className='w-100  submit-hover' variant="primary" type="submit" value="Send">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div >



        </div >
    );
};

export default ContactMe;