import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/img/image.jpg`}
                    alt="Graduate from university"
                />
                <Carousel.Caption>
                    <h3>Welcome to My Portfolio</h3>
                    <p>This is a brief introduction about myself.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/img/image2.jpg`}
                    alt="Visit to Microsoft"
                />
                <Carousel.Caption>
                    <h3>My Work</h3>
                    <p>Here are some highlights of my lifetime.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/img/image3.jpg`}
                    alt="Contest of TSMC IMC Day 2024"
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