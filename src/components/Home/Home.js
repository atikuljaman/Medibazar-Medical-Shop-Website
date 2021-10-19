import React from 'react';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import BrandSec from '../BrandSec/BrandSec';
import DealOfWeek from '../DealOfWeek/DealOfWeek';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import Testimonial from '../Testimonial/Testimonial';
//import 'Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <BannerBottom />
            <FeatureProduct />
            <DealOfWeek />
            <Testimonial />
            <BrandSec />
            <Footer />
        </div>
    );
};

export default Home;