import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path/to/image1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to My Portfolio</h3>
                    <p>This is a brief introduction about myself.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path/to/image2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>My Work</h3>
                    <p>Here are some highlights of my projects.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path/to/image3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Get in Touch</h3>
                    <p>Feel free to reach out to me!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;