import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Projects.css';
import web1 from '../../../Files/website-image/website1/img1.png';
import web2 from '../../../Files/website-image/website2/img1.png';
import web3 from '../../../Files/website-image/website3/img1.png';

const Projects = () => {

    // -------------------------------------

    const projects = [

        {
            id: 1,
            siteImage: web1,
            projectName: 'Pixel Camera',
            projectNickName: 'Manufacturer Website',
            liveWebsiteLink: 'https://pixel-camera-c8298.web.app/',
            gitHubClient: 'https://github.com/rahathossain3/pixel-camera-client_side',
            gitHubServer: 'https://github.com/rahathossain3/pixel-camera-server_sid',
            features: [
                'Users can order a product.When he will be logged in to this website.',
                'Admin can add and delete products if Admin wants.',
                'An admin can make a user an admin and remove him from the admin.',
                'Show user Information, Login & registration, Database Using, Email password authentication.'
            ],
            Technology: 'React, Node JS, Express JS, MongoDB, Cros, DotEnv, JWT, React Hooks form, Tailwind CSS, Daisy UI, React Toastify, Firebase, React Query, Heroku.'
        },

        {
            id: 2,
            siteImage: web2,
            projectName: 'Laptop Warehouse',
            projectNickName: 'Warehouse-Management Website',
            liveWebsiteLink: 'https://laptop-warehouse-aad91.web.app/',
            gitHubClient: 'https://github.com/rahathossain3/laptop-warehouse-client_side',
            gitHubServer: 'https://github.com/rahathossain3/laptop-warehouse-server_side',
            features: [
                'Login & registration, Database Using, Email password authentication.',
                'Custom data add, Delete, Selected data update.',
                'User wise data select, User find own item data that he added.',
                'Selected item stock update & with error handle, Selected item delivery.'
            ],
            Technology: 'React, Node JS, Express JS, MongoDB, Cros, DotEnv, React Hooks form, Bootstrap CSS, React Toastify, Firebase, Heroku.'
        },

        {
            id: 3,
            siteImage: web3,
            projectName: 'Md. Rahat Photography ',
            projectNickName: 'Service Provider Website',
            liveWebsiteLink: 'https://md-rahat-photography.web.app/',
            gitHubClient: 'https://github.com/rahathossain3/md-rahat-photography',
            gitHubServer: '/home',
            features: [
                'Login & registration, Email password authentication.',
                'Order a Service for Photography program',
                'Responsive for mobile & Pc',
                'User can Book a Photography Service'
            ],
            Technology: 'React, React Hooks form, Bootstrap CSS, Firebase.'

        }
    ];




    // ---------------------------------------
    return (
        <div id='projects' className=' container-fluid p-3 p-lg-5 p-3 p-md-4 p-sm-2 pt-3 bg-black'>
            <div className='left-border text-left ps-2 mb-5 mt-3 text-light'>
                <h1 >
                    <span className='title'>CREATIVE</span> WORKS
                </h1>
                <h6> Check out My latest creative works</h6>
            </div>


            <div id='project' className='project-info'>

                {
                    projects.map(project => <>
                        <Card key={project.id} className=' rounded-3 align-items-center shadow border-success' title={project.projectName}>
                            <Card.Img variant="top" alt={project.projectName} className='project-img' src={project.siteImage} />
                            <Card.Body>
                                <Card.Title>
                                    <span className='fs-4 project-title'> {project.projectName} </span>
                                    <span>({project.projectNickName}) </span>
                                </Card.Title>
                                <Card.Text>
                                    <div className='d-flex justify-content-between pt-4 px-5 my-2'>
                                        <div>
                                            <a href={project.liveWebsiteLink} target="blank">
                                                <button className='btn btn-outline-dark'> Live site</button>
                                            </a>
                                        </div>
                                        <div>
                                            <a href={project.gitHubClient} target="blank">
                                                <button className='btn btn-outline-dark'> GitHub Client</button>
                                            </a>
                                        </div>
                                        <div>
                                            <a href={project.gitHubServer} target="blank">
                                                <button className='btn btn-outline-dark'> GitHub Server</button>
                                            </a>
                                        </div>
                                    </div>
                                    <br />
                                    <hr />
                                    <div className='my-3'>
                                        <h5 className=' text-success'>Features</h5>
                                        <hr />
                                        <ul>
                                            {
                                                project.features.map((feature, index) => <li key={index}>{index + 1}. {feature}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <br />
                                    <div className='my-2'>
                                        <h5 className='text-success'>Technology</h5>
                                        <hr />
                                        <p> {project.Technology}</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className='card-footer '>
                                <a href={project.liveWebsiteLink} target="blank">
                                    <button className='btn btn-outline-dark w-75 '> View Details</button>
                                </a>
                            </Card.Footer>
                        </Card>
                    </>)
                }
            </div>



        </div>
    );
};

export default Projects;