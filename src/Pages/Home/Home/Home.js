import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TourGuide></TourGuide>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;