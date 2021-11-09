import React from 'react';
import img from '../../../images/about.png';
const AboutUs = () => {
    return (
        <div className="container mt-5">
            <h5 className="text-danger border-bottom border-danger w-25 mx-auto text-center border-1">About Us</h5>
            <h2 className="text-center">The Best Travel Agency Company.</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
                <div class="col">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div class="col">
                    <h6 className="text-danger">World Tour</h6>
                    
                    <p>Founded in 2021, WorldTour.com is an industry and traveler favorite. The website lists more than 28 million accommodation options, from hotels, hostels, and B&Bs to vacation homes and luxury resorts. This means that when you search for a hotel by destination, you have more choice on  WorldTour than on any other OTA.The website performs well in terms of cost, typically returning lower-than-average prices for flights and hotels.World Tour takes care of every aspect of your vacation, offering tours, activities, and airport taxis in addition to the standard services provided by most OTAs. The interface is also easy to use. On the home page, search for a hotel by entering your chosen destination and dates. Then, use the extensive list of filters to narrow the results down and find the best fit for you. You can also search for a specific hotel, or seek inspiration by clicking through portfolios grouped by destination or property type. </p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;