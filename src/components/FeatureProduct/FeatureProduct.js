import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './FeatureProduct.css'

const FeatureProduct = () => {
    const [featurePd, setFeaturePd] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/atikuljaman/assignment-10-fakedata/main/fakeData.json')
            .then(res => res.json())
            .then(data => setFeaturePd(data))
    });

    return (
        <div className="my-5">
            <Container className="pt-5">
                <Row className=" py-5 mb-3">
                    <Col md={10} className="feature-product-heading">
                        <h3 className="fw-bold">Featured Products</h3>
                        <p>Ayurvedic medicine is one of the world's oldest medical systems.</p>
                    </Col>
                    <Col md={2}>
                        <button className="bg-transparent feature-product-btn fw-bold text-uppercase">
                            View all product
                            <BsArrowRight />
                        </button>
                    </Col>
                </Row>
                <Row>
                    {featurePd.map(product => (
                        <Col md={3}>
                            <Link className="text-decoration-none text-dark" to={`/productDetail/${product.id}`}>
                                <Card className="border-0 text-center mb-5 product-card">
                                    <Card.Img variant="top" src={product?.img} />
                                    <Card.Body>
                                        <Card.Title>{product?.name}</Card.Title>
                                        <Card.Text className="product-price">
                                            <span className="me-3">$<del>{product?.prePrice.toFixed(2)}</del></span>
                                            <span>${product?.price.toFixed(2)}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                    )).slice(0, 8)}
                </Row>
            </Container>
        </div>
    );
};

export default FeatureProduct;