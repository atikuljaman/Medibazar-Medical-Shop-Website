import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { VscMail } from 'react-icons/vsc';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container className="pt-5">
                <Row className="gy-4">
                    <Col md={3}>
                        <h5>About Company</h5>
                        <p className="text-secondary py-2">But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                        <div className="social-icon text-secondary">
                            <FaFacebookF className="me-5" />
                            <FaTwitter className="me-5" />
                            <FaInstagram className="me-5" />
                            <FaLinkedinIn className="me-5" />
                        </div>

                    </Col>
                    <Col md={3}>
                        <h5>Useful Links</h5>
                        <div className="pt-1 text-secondary">
                            <p>Shipping Options</p>
                            <p>My Wishlist</p>
                            <p>My Account</p>
                            <p>Return Policy</p>
                            <p>Product Categories</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h5>Categories</h5>
                        <div className="pt-1 text-secondary">
                            <p>Hand Gloves</p>
                            <p>Vitamins & Supplements</p>
                            <p>Health & Medicine</p>
                            <p>Oxygen Mmeter & Mask</p>
                            <p>Medical Equipment</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <div className="d-flex text-secondary mt-2">
                            <span><BiMap className="fs-4 me-2" /></span>
                            <span>	KlbTheme, 789 Main rd,
                                Anytown, CA 12345 USA</span>
                        </div>
                        <div className="d-flex text-secondary mt-2">
                            <span><BsTelephone className="fs-4 me-2" /></span>
                            <span>+ 888 456-7890</span>
                        </div>
                        <div className="d-flex text-secondary mt-2">
                            <span><VscMail className="fs-4 me-2" /></span>
                            <span>	medibazar@klbtheme.com</span>
                        </div>
                    </Col>
                </Row>
                <hr />
                <p className="text-secondary"><small>Copyright 2021.Atikul Jaman . All rights reserved.</small></p>
            </Container>
        </div>
    );
};

export default Footer;