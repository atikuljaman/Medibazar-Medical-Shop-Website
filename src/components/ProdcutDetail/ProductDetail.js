import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { BsPlusLg } from "react-icons/bs";
import { useParams } from 'react-router';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import './ProductDetail.css'

const ProductDetail = () => {
    const { productId } = useParams()
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/atikuljaman/assignment-10-fakedata/main/fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const product = products.find(pd => pd.id === productId)

    const handlePlusBtn = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const handleMinusBtn = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity)
        }
    }

    return (
        <div>
            <Header />

            <Container className="mt-5">
                <Row className="gy-3">
                    <Col md={6}>
                        <img className="img-fluid product-img" src={product?.img} />
                    </Col>
                    <Col md={6}>
                        <h2>{product?.name}</h2>
                        <div className="rating py-3">
                            <Rating
                                className="rating-icon me-1"
                                initialRating={product?.rating}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                            />
                            <span className="text-secondary">(1 customer review)</span>
                        </div>
                        <span className="price fs-5 me-3">$<del>{product?.prePrice.toFixed(2)}</del></span>
                        <span className="price fs-4">${product?.price.toFixed(2)}</span>
                        <p className="my-3 w-75 text-secondary">{product?.smallDesc}</p>
                        <p className="py-3"><strong>Categories:</strong> <span className="text-secondary">{product?.ctg}</span></p>

                        <div className="d-flex py-3">
                            <div className="product-quantity d-flex align-items-center justify-content-around me-3">
                                <button onClick={handlePlusBtn} className="border-0 fw-bold">+</button>
                                <input className="border-0 bg-transparent w-25 text-center fw-bold" type="number" Value={quantity} />
                                <button onClick={handleMinusBtn} className="border-0 fw-bold">-</button>
                            </div>
                            <button className="border-0 fw-bold text-white rounded-pill add-to-cart-btn">Add to cart <BsPlusLg className="ps-1" /> </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default ProductDetail;