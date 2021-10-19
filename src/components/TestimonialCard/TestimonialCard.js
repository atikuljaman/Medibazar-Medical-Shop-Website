import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import './TestimonialCard.css'

const TestimonialCard = ({ src }) => {
    return (
        <div className="testimonial-card">
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col className="testimonial" md={6}>
                        <Card className="pb-3 border-0">
                            <div className="py-3">
                                <div className="testimonial-header d-flex justify-content-between align-items-center">

                                    <Card.Img className="img-fluid testimonial-img" variant="top" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/09/01-1.png" />
                                    <div>
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Text className="testimonial-desc w-100">
                                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </Card.Text>
                                </Card.Body>
                            </div>

                            <Card.Title className="testimonial-name">
                                <div className="ps-5 ms-3">
                                    Adam Smith
                                    <p><small className="fs-6">Front end developer</small></p>
                                </div>
                            </Card.Title>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="pb-3 border-0">
                            <div className="p-2">
                                <div className="testimonial-header d-flex justify-content-between align-items-center">
                                    <Card.Img className="img-fluid testimonial-img" variant="top" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/09/02.png" />
                                    <div>
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                        <BsFillStarFill className="fs-5 me-2 testimonial-icon" />
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Text className="testimonial-desc w-100">
                                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </Card.Text>
                                </Card.Body>
                            </div>

                            <Card.Title className="testimonial-name">
                                <div className="ps-5 ms-3">
                                    Daisy Lana
                                    <p><small className="fs-6">Front end developer</small></p>
                                </div>
                            </Card.Title>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TestimonialCard;