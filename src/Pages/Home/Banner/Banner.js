import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner-title">
                        <h1>Amazing Tour In Hampshire</h1>
                        <h5 className="text-danger">7 Days, 8 Night Tour</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="banner-title">
                        <h1>Amazing Tour In Indonesia </h1>
                        <h5 className="text-danger">7 Days, 8 Night Tour</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="banner-title">
                        <h1>Amazing Tour In Madagascar </h1>
                        <h5 className="text-danger">7 Days, 8 Night Tour</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;