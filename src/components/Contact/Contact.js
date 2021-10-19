import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiMap, BiTimeFive } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOpenOutline } from "react-icons/io5";
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="contact-banner">
                <h1 className="text-white">Contact Us</h1>
            </div>

            <Container className="pt-5">
                <Row className="pt-5">
                    <Col className="m-auto" md={4}>
                        <h2>Contact Us</h2>
                        <div className="d-flex align-items-center my-5">
                            <BiMap className="fs-1 me-2 contact-icon" />
                            <div>
                                <h6 className="text-uppercase text-secondary">Address</h6>
                                <h5>
                                    205 Middle Road, 2nd
                                    <br />
                                    Floor, New York
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-5">
                            <BsTelephone className="fs-1 me-2 contact-icon" />
                            <div>
                                <h6 className="text-uppercase text-secondary">Phone</h6>
                                <h5>
                                    + 012 345 678 99
                                    <br />
                                    + 457 789 789 65
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-5">
                            <IoMailOpenOutline className="fs-1 me-2 contact-icon" />
                            <div>
                                <h6 className="text-uppercase text-secondary">EMAIL</h6>
                                <h5>
                                    support@gmail.com
                                    <br />
                                    contact@medibazar.net
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-5">
                            <BiTimeFive className="fs-1 me-2 contact-icon" />
                            <div>
                                <h6 className="text-uppercase text-secondary">WORKING HOURS</h6>
                                <h5>
                                    Sunday - Monday,
                                    <br />
                                    08 am - 09 pm
                                </h5>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center" md={8}>
                        <img className="img-fluid me-3" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/contact.jpg" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Contact;