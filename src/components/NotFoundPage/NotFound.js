import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../image/notfound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound d-flex flex-column align-items-center  justify-content-center">
            <img className="img-fluid w-50" src={NotFoundImg} />
            <Link className="text-decoration-none" to="/home">
                <button className="border-0 text-white fw-bold go-back-btn rounded-pill">Go back home</button>
            </Link>
        </div>
    );
};

export default NotFound;