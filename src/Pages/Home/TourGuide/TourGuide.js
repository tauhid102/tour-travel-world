import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram,AiFillTwitterCircle,AiOutlineMail } from 'react-icons/ai';
import guide1 from '../../../images/Guide/guide-1.png';
import guide2 from '../../../images/Guide/guide-3.png';
import guide3 from '../../../images/Guide/guide-4.png';
import './TourGuide.css';
const TourGuide = () => {
    return (
        <div className="container mt-5">
            <h5 className="text-danger border-bottom border-danger w-25 mx-auto text-center border-1">Tour Guide</h5>
            <h2 className="text-center">All Guide Are 5 Year Expart In Travel</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4 mt-2">
                <div class="col">
                    <div class="card">
                        <img src={guide1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Nazmin Rahman</h3>
                            <h5>Tour Guide</h5>
                            <ul className="social-link">
                                <li><BsFacebook/></li>
                                <li><AiFillInstagram/></li>
                                <li><AiFillTwitterCircle/></li>
                                <li><AiOutlineMail/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={guide2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Lopa Ahmed</h3>
                            <h5>Tour Guide</h5>
                            <ul className="social-link">
                                <li><BsFacebook/></li>
                                <li><AiFillInstagram/></li>
                                <li><AiFillTwitterCircle/></li>
                                <li><AiOutlineMail/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={guide3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Noman Hossain</h3>
                            <h5>Tour Guide</h5>
                            <ul className="social-link">
                                <li><BsFacebook/></li>
                                <li><AiFillInstagram/></li>
                                <li><AiFillTwitterCircle/></li>
                                <li><AiOutlineMail/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuide;