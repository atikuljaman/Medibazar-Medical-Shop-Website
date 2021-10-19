import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/atikuljaman/assignment-10-fakedata/main/fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header />
            <div className="shop-banner">
                <h1 className="text-white">Products</h1>
            </div>

            <Container className="p-5">
                <h3 className="my-5">All Products</h3>
                <Row>
                    {products.map(product => (
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
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Shop;