import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRight, BsPlusLg } from "react-icons/bs";
import './DealOfWeek.css'

const DealOfWeek = () => {
    return (
        <div className="deal">
            <Container className="deal-container p-5">
                <Row>
                    {<Col className="d-flex flex-column align-items-center  justify-content-center" md={6}>
                        <div className="deal-offer">
                            <h3>Deal Of This Week</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error</p>

                            <div className="deal-detail py-3">
                                <h2><span>Covid -19</span> Vaccine</h2>
                                <p className="fw-bold">$205.99</p>
                                <button className="text-white fw-bold border-0">Buy Now <BsPlusLg className="ps-1" /> </button>
                            </div>
                            <div className="pt-5 d-flex ">
                                <div className="date bg-light mx-3 d-flex  flex-column align-items-center">
                                    <span className="fs-1 fw-bold">20</span>
                                    <p className="text-uppercase fw-bold">Days</p>
                                </div>
                                <div className="hour bg-light mx-3 d-flex  flex-column align-items-center">
                                    <span className="fs-1 fw-bold">18</span>
                                    <p className="text-uppercase fw-bold">Hour</p>
                                </div>
                                <div className="minute bg-light mx-3 d-flex  flex-column align-items-center">
                                    <span className="fs-1 fw-bold">29</span>
                                    <p className="text-uppercase fw-bold">Minute</p>
                                </div>
                                <div className="second bg-light mx-3 d-flex  flex-column align-items-center">
                                    <span className="fs-1 fw-bold">56</span>
                                    <p className="text-uppercase fw-bold">Seconds</p>
                                </div>
                            </div>
                        </div>
                    </Col>}
                    <Col className="py-5" md={6}>
                        <img className="img-fluid" src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/deal-item.png" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DealOfWeek;