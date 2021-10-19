import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from "react-icons/bs";
import './BannerBottom.css'

const BannerBottom = () => {
    return (
        <div className="my-5">
            <Container className="pt-3">
                <Row className="gy-3">
                    <Col className="banner-bottom" md={4}>
                        <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-04.jpg" />
                        <div className="banner-bottom-desc text-center">
                            <h4>Covid 19</h4>
                            <h2>Lab Face Mask</h2>
                            <button>Shop Now <BsPlusLg /></button>
                        </div>
                        <div className="banner-bottom-offer pt-2 rounded-circle d-flex justify-content-center align-items-center flex-column">
                            <p className="fw-bold">20%</p>
                            <p className="fw-normal">OFF</p>
                        </div>
                    </Col>
                    <Col className="banner-bottom" md={4}>
                        <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-05.jpg" />
                        <div className="banner-bottom-desc text-center">
                            <h4>Covid 19</h4>
                            <h2>Hand Mask</h2>
                            <button>Shop Now <BsPlusLg /></button>
                        </div>
                        <div className="banner-bottom-offer pt-2 rounded-circle d-flex justify-content-center align-items-center flex-column">
                            <p className="fw-bold">10%</p>
                            <p className="fw-normal">OFF</p>
                        </div>
                    </Col>
                    <Col className="banner-bottom" md={4}>
                        <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-06.jpg" />
                        <div className="banner-bottom-desc text-center">
                            <h4>Covid 19</h4>
                            <h2>Hand Sanitizer</h2>
                            <button>Shop Now <BsPlusLg /></button>
                        </div>
                        <div className="banner-bottom-offer pt-2 rounded-circle d-flex justify-content-center align-items-center flex-column">
                            <p className="fw-bold">30%</p>
                            <p className="fw-normal">OFF</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default BannerBottom;