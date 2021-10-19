import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight, BsBookmark, BsFolder, BsPlusLg } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Header />
            <div className="blog-banner">
                <h1 className="text-white">Blog Posts</h1>
            </div>
            <Container className="pt-5">
                <Row className="pt-5">
                    <Col md={8}>
                        <Row className="p-5">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/09/b-02.jpg" />
                                    <Card.Body>
                                        <Card.Text className="ms-3">
                                            <div>
                                                <span className=""><FaRegCalendarAlt className="me-1" /> October 6, 2020</span>
                                                <span className="ms-3"><BsFolder className="me-1" /> Gallery</span>
                                                <span className="ms-3"><BsBookmark className="me-1" /> envato, slider</span>
                                            </div>
                                            <h1 className="my-4 ">But I must explain to you how all this mistaken idea</h1>
                                            <p className="text-secondary">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
                                                laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis e
                                                t quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                , sed do eiusmod tempor incididunt ut labore
                                            </p>
                                            <button className="blog-btn border-0 text-white fw-bold my-4">Read more <BsArrowRight className="fw-bold" /> </button>


                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="p-5">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/09/b-01.jpg" />
                                    <Card.Body>
                                        <Card.Text className="ms-3">
                                            <div>
                                                <span className=""><FaRegCalendarAlt className="me-1" /> October 6, 2020</span>
                                                <span className="ms-3"><BsFolder className="me-1" /> Gallery</span>
                                                <span className="ms-3"><BsBookmark className="me-1" /> envato, slider</span>
                                            </div>
                                            <h1 className="my-4 ">But I must explain to you how all this mistaken idea</h1>
                                            <p className="text-secondary">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
                                                laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis e
                                                t quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                , sed do eiusmod tempor incididunt ut labore
                                            </p>
                                            <button className="blog-btn border-0 text-white fw-bold my-4">Read more <BsArrowRight className="fw-bold" /> </button>


                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="p-5">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/09/b-02.jpg" />
                                    <Card.Body>
                                        <Card.Text className="ms-3">
                                            <div>
                                                <span className=""><FaRegCalendarAlt className="me-1" /> October 6, 2020</span>
                                                <span className="ms-3"><BsFolder className="me-1" /> Gallery</span>
                                                <span className="ms-3"><BsBookmark className="me-1" /> envato, slider</span>
                                            </div>
                                            <h1 className="my-4 ">But I must explain to you how all this mistaken idea</h1>
                                            <p className="text-secondary">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
                                                laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis e
                                                t quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                , sed do eiusmod tempor incididunt ut labore
                                            </p>
                                            <button className="blog-btn border-0 text-white fw-bold my-4">Read more <BsArrowRight className="fw-bold" /> </button>


                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="p-5" md={4}>
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
                        <Row className="mb-4">
                            <Col className="banner-right">
                                <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/b-03.jpg" />
                                <div className="banner-right-desc">
                                    <span>Sanitizer</span>
                                    <h2>Temperature</h2>
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
            <Footer />
        </div>
    );
};

export default Blog;