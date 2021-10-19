import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header py-3 px-4">
            <Row className="header-bottom-border">
                <Col className="header-top" md={8}>
                    <div className="d-flex align-items-center">

                        <p className="header-top-heading">
                            <BsSuitHeartFill className="text-danger fs-6 mb-1 me-2" />
                            Welcome to Medibazae. We provides
                            <span className="fw-bold mx-1">Covid-19</span>
                            medical accessories</p>

                        <p className="header-top-number fw-bold py-1 px-3 rounded-pill">
                            <AiOutlinePhone className="me-1 fs-4" />
                            +123 (456) 7879
                        </p>
                    </div>
                </Col>

                <Col className="d-flex justify-content-evenly align-items-center pb-1 text-center" md={4}>
                    <div>
                        {user.email &&
                            <div className="d-flex align-items-center">
                                <img className="img-fluid me-2 border-0 user-img" src={user.photoURL && user.photoURL} />
                                <p className="m-0">{user.displayName && user.displayName}</p>
                            </div>
                        }
                    </div>
                    <NavLink className="text-decoration-none header-top-right-navlink" to="/login">
                        {
                            user.email ?
                                <Link className="text-decoration-none" to="/">
                                    <button className="border-0 logout-btn text-white" onClick={logOut}>Log out</button>
                                </Link>
                                : <span><FaSignInAlt className="me-2 fs-5" />
                                    Sign In
                                </span>
                        }
                    </NavLink>
                    {
                        !user.email && <NavLink className="text-decoration-none header-top-right-navlink" to="/signup">
                            <MdOutlineAccountCircle className="me-2 fs-5" />
                            Sign Up
                        </NavLink>
                    }
                    <NavLink className="text-decoration-none header-top-right-navlink" to="">
                        <BsSuitHeart className="me-2 fs-5" />
                        Wishlist
                    </NavLink>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <img className="img-fluid header-logo" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/logomed.png" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <NavLink className="fw-bold text-decoration-none me-5 pt-1 navLink" to="/home">Home</NavLink>
                                <NavLink className="fw-bold text-decoration-none me-5 pt-1 navLink" to="/shop">Shop</NavLink>
                                <NavLink className="fw-bold text-decoration-none me-5 pt-1 navLink" to="/blog">Blog</NavLink>
                                <NavLink className="fw-bold text-decoration-none me-5 pt-1 navLink" to="/contact">Contact</NavLink>
                                <button className="border-0 bg-transparent cart-box rounded-pill">
                                    <BiShoppingBag className="cart-icon fs-2" />
                                    <span className="fs-6 cart-length fw-bold rounded-circle px-1">0</span>
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row className="mt-3 mb-1">
                <Col className="d-flex justify-content-center">
                    <div className="search-box">
                        <input className="border-0 bg-transparent outline-0" type="text" placeholder="Search" />
                        <button className="border-0 bg-transparent"><FaSearch className="fs-6" /></button>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default Header;