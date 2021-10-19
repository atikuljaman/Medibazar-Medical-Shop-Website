import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { BsPlusLg } from "react-icons/bs";
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="carousel" md={8}>
                        <Carousel controls={false}>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-01.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption className="d-flex h-100 align-items-center">
                                    <div className="text-dark w-100 carousel-item-detail text-start">
                                        <h3>Aleo Vera</h3>
                                        <h1 className="text-uppercase fw-bold">Hair Oil</h1>
                                        <p>Ayurvedic hair oils have their own significance. They help reduce hair fall, dandruff..</p>
                                        <button className="border-0 text-white fw-bold rounded-pill" >Buy Now <BsPlusLg className="ps-1" /> </button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-01.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption className="d-flex h-100 align-items-center">
                                    <Col className="text-dark w-100 carousel-item-detail text-start">
                                        <h3>Aleo Vera</h3>
                                        <h1 className="text-uppercase fw-bold">Hair Oil</h1>
                                        <p>Ayurvedic hair oils have their own significance. They help reduce hair fall, dandruff..</p>
                                        <button className="border-0 text-white fw-bold rounded-pill">Buy Now <BsPlusLg className="ps-1" /> </button>
                                    </Col>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={4}>
                        <Row className="mb-4">
                            <Col className="banner-right">
                                <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-02.jpg" />
                                <div className="banner-right-desc">
                                    <span>Cosmetics</span>
                                    <h2>Body Lotion</h2>
                                    <button className="fw-bold bg-transparent">Shop Now <BsPlusLg className="ps-1" /></button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="banner-right">
                                <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-03.jpg" />
                                <div className="banner-right-desc">
                                    <span>Sanitizer</span>
                                    <h2>Temperature</h2>
                                    <button className="fw-bold bg-transparent">Shop Now <BsPlusLg className="ps-1" /></button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;