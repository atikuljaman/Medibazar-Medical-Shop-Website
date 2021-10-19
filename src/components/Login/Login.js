import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import LoginImg from '../../image/login.png'
import './Login.css'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleGoogleBtn, handleGitHubBtn, handleSignInWithEmail, error } = useAuth();

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);

    }

    const handleSubmitBtn = (e) => {
        e.preventDefault()
        handleSignInWithEmail(email, password)
    }

    return (
        <div>
            <Header />
            <Container className="pt-3">
                <Row>
                    <Col md={6}>
                        <img className="img-fluid" src={LoginImg} />
                    </Col>
                    <Col className="px-5" md={6}>
                        <h4 className="py-3">Login</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleEmail} className="py-3" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handlePassword} className="py-3" type="password" placeholder="Password" />
                                <p className="text-danger">{error}</p>
                            </Form.Group>
                            <div className="text-end">
                                <button className="mb-3 forget-btn bg-transparent border-0">Forget Password</button>
                            </div>
                            <button onClick={handleSubmitBtn} className="w-100 border-0 text-white fw-bold submit-btn">Submit</button>
                        </Form>
                        <p className="text-center text-secondary py-3">or sign in with</p>
                        <div className="text-center d-flex justify-content-center">
                            <div className="d-flex">
                                <button onClick={handleGitHubBtn} className="github-btn border-0 text-white me-3 d-flex align-items-center justify-content-center"><FaGithub className="me-1" /> Github</button>
                                <button onClick={handleGoogleBtn} className="google-btn border-0 text-white d-flex align-items-center justify-content-center"><BsGoogle className="me-1" /> Google</button>
                            </div>
                        </div>
                        <p className="text-center py-3">Don't have an account? <Link to="/signup">Click here</Link></p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Login;