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
            projectName: 'Pixel Camera  (Manufacturer Website)',
            liveWebsiteLink: 'https://pixel-camera-c8298.web.app/',
            gitHubClient: 'https://github.com/rahathossain3/pixel-camera-client_side',
            gitHubServer: 'https://github.com/rahathossain3/pixel-camera-server_sid',
            Features: {
                f1: 'Users can order a product.When he will be logged in to this website.',
                f2: 'Admin can add and delete products if Admin wants.',
                f3: 'An admin can make a user an admin and remove him from the admin.',
                f4: 'Show user Information, Login & registration, Database Using, Email password authentication.'
            },
            Technology: 'React, Node JS, Express JS, MongoDB, Cros, DotEnv, JWT, React Hooks form, Tailwind CSS, Daisy UI, React Toastify, Firebase, React Query, Heroku.'
        },

        {
            id: 2,
            siteImage: web2,
            projectName: 'Laptop Warehouse (Warehouse-Management Website)',
            liveWebsiteLink: 'https://laptop-warehouse-aad91.web.app/',
            gitHubClient: 'https://github.com/rahathossain3/laptop-warehouse-client_side',
            gitHubServer: 'https://github.com/rahathossain3/laptop-warehouse-server_side',
            Features: {
                f1: 'Login & registration, Database Using, Email password authentication.',
                f2: 'Custom data add, Delete, Selected data update.',
                f3: 'User wise data select, User find own item data that he added.',
                f4: 'Selected item stock update & with error handle, Selected item delivery.'
            },
            Technology: 'React, Node JS, Express JS, MongoDB, Cros, DotEnv, React Hooks form, Bootstrap CSS, React Toastify, Firebase, Heroku.'
        },

        {
            id: 3,
            siteImage: web3,
            projectName: 'Md. Rahat Photography (Service Provider Website)',
            liveWebsiteLink: 'https://md-rahat-photography.web.app/',
            gitHubClient: 'https://github.com/rahathossain3/md-rahat-photography',
            gitHubServer: '/home',
            Features: {
                f1: 'Login & registration, Email password authentication.',
                f2: 'Order a Service for Photography program',
                f3: 'Responsive for mobile & Pc',
                f4: 'User can Book a Photography Service'
            },
            Technology: 'React, React Hooks form, Bootstrap CSS, Firebase.'

        }
    ];




    // ---------------------------------------
    return (
        <div className=' p-lg-5 p-md-4 p-sm-2 pt-3 bg-black'>
            <div className='left-border text-left ps-2 mb-5 text-light'>
                <h1 >
                    <span className='title'>CREATIVE</span> WORKS
                </h1>
                <h6> Check out My latest creative works</h6>
            </div>


            <div id='project' className='project-info'>

                {
                    projects.map(project => <>
                        <Card className='rounded shadow border-success'>
                            <Card.Img variant="top" src={project.siteImage} />
                            <Card.Body>
                                <Card.Title>{project.projectName}</Card.Title>
                                <Card.Text>

                                    <div className='d-flex justify-content-between py-4 px-5'>
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

                                </Card.Text>
                            </Card.Body>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>

                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </>)
                }
            </div>



        </div>
    );
};

export default Projects;