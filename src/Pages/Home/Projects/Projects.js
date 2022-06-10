import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {

    // -------------------------------------










    // ---------------------------------------
    return (
        <div className=' p-lg-5 p-md-4 p-sm-2 pt-3'>
            <div className='left-border text-left ps-2 mb-5'>
                <h1 >
                    CREATIVE WORKS
                </h1>
                <h6> Check out My latest creative works</h6>
            </div>

            <div className=' d-grid grid'>








                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>



        </div>
    );
};

export default Projects;