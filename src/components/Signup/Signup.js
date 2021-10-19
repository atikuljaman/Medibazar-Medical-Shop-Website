import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { BsGoogle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import SignUpImg from '../../image/signup.png'
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleSignupWithEmail, error, handleGoogleBtn } = useAuth();

    const handleUserName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);

    }

    const handleSubmitBtn = (e) => {
        e.preventDefault()
        handleSignupWithEmail(email, password, name)
    }
    return (
        <div>
            <Header />
            <Container className="pt-3">
                <Row>
                    <Col md={6}>
                        <img className="img-fluid" src={SignUpImg} />
                    </Col>
                    <Col className="px-5" md={6}>
                        <h4 className="py-3">Sign up</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control onChange={handleUserName} className="py-3" type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleEmail} className="py-3" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handlePassword} className="py-3" type="password" placeholder="Password" />
                                <p className="text-danger">{error}</p>
                            </Form.Group>
                            <button onClick={handleSubmitBtn} className="w-100 border-0 text-white fw-bold submit-btn">Submit</button>
                        </Form>
                        <p className="text-center text-secondary py-3">or sign up with</p>
                        <div className="text-center d-flex justify-content-center">
                            <div className="d-flex">
                                <button className="github-btn border-0 text-white me-3 d-flex align-items-center justify-content-center"><FaGithub className="me-1" /> Github</button>
                                <button onClick={handleGoogleBtn} className="google-btn border-0 text-white d-flex align-items-center justify-content-center"><BsGoogle className="me-1" /> Google</button>
                            </div>
                        </div>
                        <p className="text-center py-3">Already have an account? <Link to="/login">Click here</Link></p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Signup;