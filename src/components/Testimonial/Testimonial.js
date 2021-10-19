import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css'

const Testimonial = () => {

    return (
        <div className="my-5">
            <h3 className="text-center pt-5">What Our Client’s Say</h3>
            <p className="text-center text-secondary">Sed ut perspiciatis unde omnis iste natus error</p>
            <Container className="pt-5">
                <Row>
                    <TestimonialCard></TestimonialCard>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;