import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark mt-5">
            <div className="container text-white">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center">
                    <div className="col">
                        <h3 className="text-danger border-bottom border-danger border-2">World Tour</h3>
                        <p>A traveling around from place to place. a long journey including the visiting of a number of places in sequence, especially with an organized group led by a guide.A journey from town to town to fulfill engagements.</p>
                    </div>
                    <div className="col">
                        <h3 className="text-danger border-bottom border-danger border-2">Contact Us</h3>
                        <p>+018521264122 <br /> +8801778804396</p>
                        <p>info@worldtour.com <br /> support@worldtour.com</p>
                    </div>
                    <div className="col">
                        <h3 className="text-danger border-bottom border-danger border-2">Support</h3>
                        <h5>Contact us</h5>
                        <h5>About Us</h5>
                        <h5>Our Blogs</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;