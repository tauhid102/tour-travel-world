import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [spiner, setSpiner] = useState(true);
    useEffect(() => {
        fetch('https://serene-ocean-62381.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
        setSpiner(false);
    }, [])
    return (
        <div className="container mt-5">
            <h5 className="text-danger border-bottom border-danger w-25 mx-auto text-center border-1">Choose Your Package</h5>
            <h2 className="text-center">Select Your Best Package For Your Travel</h2>
            {
                spiner ? (
                    <div class="d-flex mx-auto justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </div>
                    )
            }
        </div >
    );
};

export default Services;